import type { EducationId } from "../data/education";
import type { ExperienceId } from "../data/experience";
import type { ProjectId } from "../data/projects";
import type { SkillCategoryId, SkillTermId } from "../data/skills";

// Shape every locale dictionary must satisfy. `{years}` placeholders are
// replaced at render time with the computed years of experience.
export interface Dictionary {
  meta: {
    home: { title: string; description: string };
    projects: { title: string; description: string };
  };
  nav: {
    home: string;
    projects: string;
    switchLanguage: string;
  };
  hero: {
    avatarAlt: string;
    greeting: string;
    headline: string;
    // Rendered as `lead <strong>highlight</strong> trail`.
    summary: { lead: string; highlight: string; trail: string };
    viewExperience: string;
    contact: string;
  };
  sections: {
    experience: string;
    featuredProjects: string;
    education: string;
    skills: string;
  };
  experience: Record<ExperienceId, { role: string; bullets: string[] }>;
  projects: Record<ProjectId, { description: string; tags: string[] }>;
  projectsPage: {
    heading: string;
    intro: string;
    // Card descriptions that differ on the projects page from the home page.
    descriptionOverrides: Partial<Record<ProjectId, string>>;
  };
  education: {
    graduatedLabel: string;
    licenseLabel: string;
    entries: Record<EducationId, { degree: string; degreeAlt: string }>;
  };
  skills: {
    categories: Record<SkillCategoryId, string>;
    terms: Record<SkillTermId, string>;
  };
  footer: {
    builtWith: string;
  };
}
