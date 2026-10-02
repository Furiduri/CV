import type { Dictionary } from "../types";

export default {
  meta: {
    home: {
      title: "Jorge Osvaldo Perez Mendoza | Portfolio & CV",
      description: "Licensed Software Development Engineer with {years}+ years of experience delivering high-performance backend systems, web APIs, and enterprise cloud solutions.",
    },
    projects: {
      title: "Projects | Jorge Osvaldo Perez Mendoza",
      description: "Explore my featured projects, from AI-powered mobile apps to community platforms.",
    },
  },
  nav: {
    home: "Home",
    projects: "Projects",
    switchLanguage: "Cambiar Idioma",
  },
  hero: {
    avatarAlt: "GCatCode Logo - Jorge Osvaldo Perez Mendoza",
    greeting: "Hello, I'm",
    headline: "Software Development Engineer | Backend .NET Developer",
    summary: {
      lead: "Licensed Software Development Engineer with {years}+ years of experience delivering high-performance backend systems, web APIs, and enterprise cloud solutions. Proactive, self-directed learner adept at leveraging",
      highlight: "AI Engineering and LLM-assisted workflows",
      trail: "across the entire Software Development Life Cycle (SDLC).",
    },
    viewExperience: "View Experience",
    contact: "Contact Me",
  },
  sections: {
    experience: "Work Experience",
    featuredProjects: "Featured Projects & Leadership",
    education: "Education & Credentials",
    skills: "Technical Skills",
  },
  experience: {
    resser: {
      role: "Middle Backend Developer",
      bullets: [
        "Architected and delivered robust RESTful Web APIs using C# and .NET Core 8, supporting critical fleet management and telemetry services.",
        "Implemented automated background processing and reporting pipelines leveraging Azure Functions and Azure Cloud services, improving operational data delivery speed.",
        "Managed relational database structures in SQL Server, writing complex T-SQL queries and stored procedures to enhance backend query execution times.",
        "Led Sprint deliverables and continuous integration workflows via Azure DevOps and Git, establishing rigorous code review and QA testing standards that decreased production bug rates.",
      ],
    },
    jabil: {
      role: "Programmer Analyst I",
      bullets: [
        "Designed, developed, and maintained enterprise web applications and internal backend APIs utilizing .NET Framework (C#) and Microsoft SQL Server.",
        "Collaborated with manufacturing operations teams to support data flows, reporting, and interface integrations with Manufacturing Execution Systems (MES) and SAP.",
        "Authored comprehensive technical architecture documentation, API specifications, and end-user training guides to streamline cross-team onboarding and compliance.",
        "Conducted systematic functional and regression testing, identifying bottlenecks and preventing system anomalies across manufacturing execution systems.",
        "Collaborated with international cross-functional engineering teams in agile environments to deploy feature updates on IIS servers.",
      ],
    },
    talentNetwork: {
      role: "General Incident Leader",
      bullets: [
        "Directed incident response, crisis resolution, and customer service operations for Latin America's largest tech innovation convention with 40,000+ attendees.",
        "Coordinated multidisciplinary support teams under high-pressure scenarios, ensuring adherence to data privacy standards and rapid resolution protocols.",
      ],
    },
  },
  projects: {
    petMePhone: {
      description: "AI-Powered Mobile Overlay. Engineered an Android overlay application for task automation, driving the full AI Engineering lifecycle from requirements synthesis to prompt architecture, LLM validation, and policy compliance.",
      tags: ["Android", "AI", "Mobile"],
    },
    jalapenoLab: {
      description: "Jalapeño Store. A collective designed to give Latin American board games the showcase they deserve, boosting the local industry by connecting authors, stores, and players. Acting as Event Manager and Coordinator.",
      tags: ["Event Management", "Community Building", "Board Games"],
    },
    juegalajara: {
      description: "Platform & Community. Lead developer and manager of the Juegalajara website. Organizing committee member in charge of community operations, as well as coordinating and managing social events.",
      tags: ["Frontend", "Community", "Event Management"],
    },
    gcatcode: {
      description: "Portfolio & Web Platforms. Built responsive web platforms utilizing Astro, Tailwind CSS, and TypeScript, achieving high-performance Lighthouse metrics.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
    },
  },
  projectsPage: {
    heading: "Featured Projects",
    intro: "A collection of my recent work spanning AI engineering, web development, and community platforms.",
    descriptionOverrides: {
      gcatcode: "Web Platforms & Portfolio. Built responsive web platforms using Astro, Tailwind CSS, and TypeScript, achieving high performance metrics on Lighthouse.",
    },
  },
  education: {
    graduatedLabel: "Graduated",
    licenseLabel: "Mexican Federal Professional License",
    entries: {
      ceti: {
        degree: "Bachelor of Science in Software Development Engineering",
        degreeAlt: "Licenciatura en Ingeniería en Desarrollo de Software",
      },
      udg: {
        degree: "Professional Technician in Computer Science",
        degreeAlt: "Técnico Profesional en Informática",
      },
    },
  },
  skills: {
    categories: {
      backend: "Backend & Core",
      ai: "AI Engineering & Methodologies",
      databases: "Databases & Enterprise",
      cloud: "Cloud & DevOps",
      frontend: "Frontend & Modern Web",
      testing: "Testing & Quality",
    },
    terms: {
      dependencyInjection: "Dependency Injection",
      restfulApis: "RESTful APIs",
      oop: "OOP",
      designPatterns: "Design Patterns",
      aiSdlc: "AI-Augmented SDLC",
      promptEngineering: "Prompt & Harness Engineering",
      rapidPrototyping: "Rapid Prototyping",
      agile: "Scrum / Agile",
      selfLearning: "Continuous Self-Learning",
      storedProcedures: "Stored Procedures",
      queryOptimization: "Query Optimization",
      mesSap: "MES & SAP Basics",
      qaIncidentPrevention: "QA & Incident Prevention",
      technicalDocumentation: "Technical Documentation",
    },
  },
  footer: {
    builtWith: "Built with 💚🎲 and Astro.",
  },
} satisfies Dictionary;
