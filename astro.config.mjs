// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import { defaultLocale, hreflangByLocale, locales } from "./src/i18n/config.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://cv.gcatcode.com",

  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    sitemap({
      i18n: { defaultLocale, locales: hreflangByLocale }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});