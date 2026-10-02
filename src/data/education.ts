// Locale-independent education data. Degree names live in the dictionaries,
// keyed by `id`.
export const education = [
  {
    id: "ceti",
    institution: "Centro de Enseñanza Técnica Industrial (CETI)",
    graduationYear: 2023,
    licenseNumber: "13980801",
  },
  {
    id: "udg",
    institution: "Escuela Preparatoria No. 10 – Universidad de Guadalajara (UDG)",
  },
] as const;

export type EducationId = (typeof education)[number]["id"];
