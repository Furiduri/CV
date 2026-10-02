---
name: skill-content
description: "Trigger: editing site copy, skills, projects or experience, CV.md, either README, SEO meta tags, or adding a page in the CV portfolio. Apply the content, bilingual parity and styling rules."
license: Apache-2.0
metadata:
  author: "Furiduri"
  version: "1.0"
---

## Activation Contract

Load when changing anything the visitor reads or a search engine indexes: page
copy, the skills / projects / experience data, `CV.md`, `README.md`,
`README_ES.md`, `Layout.astro` meta tags, or when adding a page or component.

## Hard Rules

- **Locales are separate files and must change together.** The English and
  Spanish pages are duplicates, not translations of one source:
  `src/pages/index.astro` ↔ `src/pages/es/index.astro` and
  `src/pages/projects/index.astro` ↔ `src/pages/es/projects/index.astro`. Skills,
  projects and experience are hard-coded in each page's frontmatter. A change to
  one file without its twin ships a site whose languages disagree. Do both in the
  same commit.
- **A new page needs both locales**, with the Spanish one under `src/pages/es/`.
- **Facts come from `CV.md`.** Never invent or "improve" employers, dates,
  titles, metrics or license numbers. If the site and `CV.md` disagree, stop and
  report the evidence; do not pick one silently.
- **The PDF cannot be regenerated here.** `CV Jorge Osvaldo Perez Mendoza EN.pdf`
  is a binary. When `CV.md` changes, tell the user the PDF is now stale; never
  claim it matches.
- **README and README_ES stay in parity**, and every claim in them must match
  the real stack. Verify against `package.json` before keeping or writing a
  claim (the stack is Astro 6 + Tailwind 4).
- **Compute, do not hardcode, what ages.** Years of experience are derived from
  the start year in the page frontmatter; keep it that way.
- **Language of copy**: English and Spanish only. Spanish is neutral and
  professional: no regional slang and no voseo, and never the assistant's persona
  voice. Code, identifiers and comments stay English.
- **Use the design tokens.** Colors and fonts live in the `@theme` block of
  `src/styles/global.css` (`brand-base`, `brand-neon`, `font-sans`,
  `font-heading`). Tailwind 4 is configured in CSS; there is no
  `tailwind.config`. Do not hardcode brand hex values in components.
- **SEO is owned by `src/layouts/Layout.astro`.** Every page passes `title` and
  `description`; canonical, Open Graph and Twitter tags derive from them, and the
  locale derives from the `/es` path prefix. Do not duplicate meta tags in
  pages. The sitemap comes from `@astrojs/sitemap` with `site` set in
  `astro.config.mjs`.
- **State the scope.** Say what the change does not cover, especially when only
  one of the two locales or one of the two READMEs was touched on purpose.

## Decision Gates

| Situation | Action |
|---|---|
| Copy, skills, projects or experience changes | Edit EN and ES together; compare the diff of both files |
| Site and `CV.md` disagree | Stop, report with evidence, ask which is right |
| `CV.md` changed | Tell the user the PDF is stale |
| New page or route | Create both locales; reuse `Layout`, `Header`, `Footer` |
| New color, font or spacing need | Add a token in `@theme`; do not hardcode |
| README claim about the stack | Check `package.json` and the config first |
| Fact missing from `CV.md` | Ask the user; do not fill the gap |
| Only one locale changed on purpose | Say so explicitly in the PR under Pending |

## Execution Steps

1. Read the page(s) you will change **and their locale twin** before editing.
2. Read the relevant section of `CV.md` for any factual content.
3. Make the change in both locales; keep the structure of the two files aligned.
4. `npm run build`; then check both routes in the preview (`/` and `/es`,
   `/projects` and `/es/projects`), desktop and mobile width.
5. If a README or `CV.md` changed, check parity and every claim against the repo.

## Output Contract

Return the files changed grouped by locale, what was checked in each, whether the
PDF is now stale, and what remains unverified or intentionally left in only one
language.

## References

- `CV.md` — source of truth for facts about the user.
- `src/layouts/Layout.astro` — SEO and locale derivation.
- `src/styles/global.css` — design tokens and shared components.
- `astro.config.mjs` — `site`, i18n and sitemap.
- `.claude/skills/skill-workflow/SKILL.md` — role split and verification discipline.
- `.claude/skills/skill-pr/SKILL.md` — branch and pull request rules.
