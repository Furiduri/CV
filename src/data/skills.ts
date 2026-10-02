// Skill categories. Plain strings are tech names shared by every locale;
// `{ term }` items are translated through the dictionary `skills.terms`.
export type SkillTermId =
  | "dependencyInjection"
  | "restfulApis"
  | "oop"
  | "designPatterns"
  | "aiSdlc"
  | "promptEngineering"
  | "rapidPrototyping"
  | "agile"
  | "selfLearning"
  | "storedProcedures"
  | "queryOptimization"
  | "mesSap"
  | "qaIncidentPrevention"
  | "technicalDocumentation";

export type SkillItem = string | { term: SkillTermId };

export const skillCategories = [
  {
    id: "backend",
    items: ["C#", ".NET 8 / Core", "ASP.NET Core Web API", ".NET Framework", "EF Core", "LINQ", "Async/Await", { term: "dependencyInjection" }, { term: "restfulApis" }, { term: "oop" }, { term: "designPatterns" }],
  },
  {
    id: "ai",
    items: [{ term: "aiSdlc" }, { term: "promptEngineering" }, { term: "rapidPrototyping" }, { term: "agile" }, { term: "selfLearning" }],
  },
  {
    id: "databases",
    items: ["Microsoft SQL Server", "T-SQL", { term: "storedProcedures" }, { term: "queryOptimization" }, "MariaDB", { term: "mesSap" }],
  },
  {
    id: "cloud",
    items: ["Microsoft Azure", "Azure DevOps", "Git", "IIS Web Server", "Firebase", "GCP"],
  },
  {
    id: "frontend",
    items: ["TypeScript", "JavaScript (ES6+)", "Astro", "Tailwind CSS", "Angular", "Vue.js", "Bootstrap", "HTML5/CSS3"],
  },
  {
    id: "testing",
    items: ["Unit Testing (xUnit/NUnit)", { term: "qaIncidentPrevention" }, { term: "technicalDocumentation" }],
  },
] as const satisfies readonly { id: string; items: readonly SkillItem[] }[];

export type SkillCategoryId = (typeof skillCategories)[number]["id"];
