// Locale-independent profile facts.
export const careerStartYear = 2019;

// Computed at build time so the years never go stale.
export const experienceYears = new Date().getFullYear() - careerStartYear;
