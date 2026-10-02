// Locale-independent experience data. Role and bullets live in the dictionaries,
// keyed by `id`.
export const experience = [
  { id: "resser", company: "Resser Tecnologías", startYear: 2024, endYear: 2026 },
  { id: "jabil", company: "Jabil Circuit de México", startYear: 2019, endYear: 2024 },
  { id: "talentNetwork", company: "Talent Network (Jalisco Talent Land)", startYear: 2017, endYear: 2024 },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];
