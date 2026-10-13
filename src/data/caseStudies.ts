// Locale-independent case study data. Copy lives in the dictionaries under
// `caseStudies.<id>`.
import type { ImageMetadata } from "astro";
import juegalajaraDesktop from "../assets/case-study/juegalajara-desktop.png";
import juegalajaraMobile from "../assets/case-study/juegalajara-mobile.jpg";
import creepyBoardDayDesktop from "../assets/case-study/creepy-boardday-desktop.jpg";
import creepyBoardDayMobile from "../assets/case-study/creepy-boardday-mobile.jpg";

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
  creepyBoardDay: {
    name: "Creepy BoardDay",
    url: "https://creepyboardday.web.app/",
    stack: ["Astro", "TypeScript", "Firebase"],
    screenshots: { desktop: creepyBoardDayDesktop, mobile: creepyBoardDayMobile },
  },
} satisfies Record<string, CaseStudyData>;
