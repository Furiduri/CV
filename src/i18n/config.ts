// Single source of truth for the site locales. Consumed by astro.config.mjs
// (i18n routing and sitemap) and by the i18n utils.

// hreflang value emitted for each locale (alternate links and sitemap).
export const hreflangByLocale = {
  en: "en",
  es: "es",
} as const;

export type Locale = keyof typeof hreflangByLocale;

export const locales = Object.keys(hreflangByLocale) as Locale[];

export const defaultLocale: Locale = "en";
