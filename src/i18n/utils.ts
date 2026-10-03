import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLocale, locales, type Locale } from "./config";
import type { Dictionary } from "./types";

// Every file in ./locales is a dictionary named after its locale code.
const modules = import.meta.glob<{ default: Dictionary }>("./locales/*.ts", { eager: true });
const dictionaries = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path.replace(/^.*\/(.+)\.ts$/, "$1"), mod.default]),
) as Record<string, Dictionary>;

// Collects every key path present in `reference` but missing in `candidate`.
// Arrays must have the same length; objects the same keys.
function findMissingPaths(reference: unknown, candidate: unknown, path: string): string[] {
  if (Array.isArray(reference)) {
    if (!Array.isArray(candidate)) return [`${path} (expected an array)`];
    if (candidate.length !== reference.length) {
      return [`${path} (expected ${reference.length} items, found ${candidate.length})`];
    }
    return reference.flatMap((item, index) => findMissingPaths(item, candidate[index], `${path}[${index}]`));
  }
  if (reference !== null && typeof reference === "object") {
    if (candidate === null || typeof candidate !== "object") return [`${path} (expected an object)`];
    return Object.keys(reference).flatMap((key) => {
      const childPath = path ? `${path}.${key}` : key;
      if (!(key in candidate)) return [childPath];
      return findMissingPaths(
        (reference as Record<string, unknown>)[key],
        (candidate as Record<string, unknown>)[key],
        childPath,
      );
    });
  }
  return [];
}

// Runs at module load, so `astro build` fails when a dictionary drifts from the
// default locale (the build does not type-check).
function assertDictionaryParity(): void {
  const reference = dictionaries[defaultLocale];
  if (!reference) {
    throw new Error(`[i18n] Missing dictionary for default locale "${defaultLocale}" in src/i18n/locales/.`);
  }
  const problems = locales.flatMap((locale) => {
    const dictionary = dictionaries[locale];
    if (!dictionary) return [`"${locale}": no dictionary file src/i18n/locales/${locale}.ts`];
    return findMissingPaths(reference, dictionary, "").map((path) => `"${locale}": missing ${path}`);
  });
  if (problems.length > 0) {
    throw new Error(
      `[i18n] Dictionaries are out of parity with "${defaultLocale}":\n  - ${problems.join("\n  - ")}`,
    );
  }
}

assertDictionaryParity();

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

// Resolves the active locale from `Astro.currentLocale`, falling back to the default.
export function resolveLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}

// Replaces `{name}` placeholders in a dictionary string.
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}

// Applies `format` to every string of a dictionary slice and keeps its shape,
// so a page can hand finished copy to presentational components (ADR-0001).
export function formatDeep<T>(value: T, values: Record<string, string | number>): T {
  if (typeof value === "string") return format(value, values) as unknown as T;
  if (Array.isArray(value)) return value.map((item) => formatDeep(item, values)) as unknown as T;
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, formatDeep(item, values)]),
    ) as T;
  }
  return value;
}

// Path of the current page without its locale prefix, e.g. "/en/cv/projects/" -> "cv/projects".
export function getUnlocalizedPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0]) && segments[0] !== defaultLocale) segments.shift();
  return segments.join("/");
}

// Localized URL of a route, e.g. ("en", "cv/projects") -> "/en/cv/projects/".
export function getLocalizedUrl(locale: Locale, path = ""): string {
  return getRelativeLocaleUrl(locale, path);
}

// One static path per locale for `[...lang]` routes; the default locale has no prefix.
export function getLocaleStaticPaths() {
  return locales.map((lang) => ({
    params: { lang: lang === defaultLocale ? undefined : lang },
    props: { lang },
  }));
}
