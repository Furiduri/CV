import { mailtoUrl } from "./business";

// Locale-independent profile facts.
export const careerStartYear = 2019;

// Computed at build time so the years never go stale.
export const experienceYears = new Date().getFullYear() - careerStartYear;

export const profileName = { given: "Jorge Osvaldo", family: "Perez Mendoza" } as const;

export const websiteUrl = "https://gcatcode.com/";

export type SocialNetwork = "email" | "github" | "linkedin" | "instagram";

// Contact and social profiles shown in the CV hero and footer. Labels are
// brand names, the same in every locale.
export const socialLinks: { network: SocialNetwork; label: string; href: string }[] = [
  { network: "email", label: "Email", href: mailtoUrl },
  { network: "github", label: "GitHub", href: "https://github.com/Furiduri" },
  { network: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/furiduri/" },
  { network: "instagram", label: "Instagram", href: "https://instagram.com/furiduri/" },
];
