// Locale-independent case study data. Copy lives in the dictionaries under
// `caseStudies.<id>`.
import type { ImageMetadata } from "astro";
import juegalajaraDesktop from "../assets/case-study/juegalajara-desktop.png";
import juegalajaraMobile from "../assets/case-study/juegalajara-mobile.jpg";

export interface CaseStudyData {
  name: string;
  url: string;
  stack: readonly string[];
  screenshots: { desktop: ImageMetadata; mobile: ImageMetadata };
}

export const caseStudies = {
  juegalajara: {
    name: "Juegalajara",
    url: "https://juegalajara.mx/",
    stack: ["Astro", "Firebase", "Tailwind CSS"],
    screenshots: { desktop: juegalajaraDesktop, mobile: juegalajaraMobile },
  },
} satisfies Record<string, CaseStudyData>;
