import type { Dictionary } from "../types";

export default {
  meta: {
    home: {
      title: "Jorge Osvaldo Perez Mendoza | Portafolio y CV",
      description: "Ingeniero en Desarrollo de Software con más de {years} años de experiencia creando sistemas backend de alto rendimiento, APIs web y soluciones en la nube usando C#, ASP.NET Core y SQL Server.",
    },
    projects: {
      title: "Proyectos | Jorge Osvaldo Perez Mendoza",
      description: "Explora mis proyectos destacados, desde aplicaciones móviles con IA hasta plataformas comunitarias.",
    },
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    switchLanguage: "Cambiar Idioma",
  },
  hero: {
    avatarAlt: "Logo de GCatCode - Jorge Osvaldo Perez Mendoza",
    greeting: "Hola, soy",
    headline: "Ingeniero en Desarrollo de Software | Backend .NET Developer",
    summary: {
      lead: "Ingeniero en Desarrollo de Software con licencia profesional y más de {years} años de experiencia creando sistemas backend de alto rendimiento, APIs web y soluciones empresariales en la nube. Aprendiz proactivo y autodidacta, experto en aprovechar",
      highlight: "flujos de trabajo asistidos por LLMs y Arquitectura de IA",
      trail: "en todo el ciclo de vida del desarrollo.",
    },
    viewExperience: "Ver Experiencia",
    contact: "Contáctame",
  },
  sections: {
    experience: "Experiencia Laboral",
    featuredProjects: "Proyectos Destacados y Liderazgo",
    education: "Educación y Credenciales",
    skills: "Habilidades Técnicas",
  },
  experience: {
    resser: {
      role: "Middle Backend Developer",
      bullets: [
        "Arquitectura y desarrollo de APIs Web RESTful robustas usando C# y .NET Core 8, dando soporte a servicios críticos de telemetría y gestión de flotas.",
        "Implementación de procesos automáticos en segundo plano y pipelines de reportes aprovechando Azure Functions y servicios en la nube de Azure, mejorando la velocidad de entrega de datos operativos.",
        "Administración de bases de datos relacionales en SQL Server, escribiendo consultas T-SQL complejas y procedimientos almacenados para reducir tiempos de ejecución en el backend.",
        "Liderazgo en entregas de Sprints y flujos de integración continua a través de Azure DevOps y Git, estableciendo rigurosos estándares de revisión de código y testing QA que disminuyeron las tasas de errores en producción.",
      ],
    },
    jabil: {
      role: "Programmer Analyst I",
      bullets: [
        "Diseño, desarrollo y mantenimiento de aplicaciones web empresariales y APIs backend internas utilizando .NET Framework (C#) y Microsoft SQL Server.",
        "Colaboración con equipos de operaciones de manufactura para dar soporte a flujos de datos, reportes e integraciones con Sistemas de Ejecución de Manufactura (MES) y SAP.",
        "Elaboración de documentación técnica exhaustiva de arquitectura, especificaciones de APIs y manuales de usuario final para optimizar la capacitación entre equipos y el cumplimiento de normas.",
        "Realización de pruebas funcionales y de regresión sistemáticas, identificando cuellos de botella y previniendo anomalías en los sistemas de ejecución.",
        "Colaboración con equipos de ingeniería multifuncionales e internacionales en entornos ágiles para desplegar actualizaciones de características en servidores IIS.",
      ],
    },
    talentNetwork: {
      role: "General Incident Leader",
      bullets: [
        "Dirección de respuesta a incidentes, resolución de crisis y operaciones de servicio al cliente para la convención de innovación tecnológica más grande de América Latina con más de 40,000 asistentes.",
        "Coordinación de equipos de soporte multidisciplinarios bajo escenarios de alta presión, garantizando el cumplimiento de los estándares de privacidad de datos y protocolos de resolución rápida.",
      ],
    },
  },
  projects: {
    petMePhone: {
      description: "Aplicación Móvil con IA. Desarrollo de aplicación de overlay para tareas en Android aplicando el ciclo completo de Ingeniería de IA (síntesis de requerimientos, generación de assets, arquitectura de código, pruebas y cumplimiento normativo).",
      tags: ["Android", "IA", "Móvil"],
    },
    jalapenoLab: {
      description: "Jalapeño Store. Colectivo diseñado para dar a los juegos latinoamericanos el escaparate que merecen, impulsando la industria local al conectar autores, tiendas y jugadores. Participo como gestor y coordinador de eventos.",
      tags: ["Gestión de Eventos", "Comunidad", "Juegos de Mesa"],
    },
    juegalajara: {
      description: "Plataforma y Comunidad. Desarrollador principal y gestor del sitio web oficial. Miembro del comité organizador encargado del funcionamiento de la comunidad, así como de la coordinación y gestión de eventos sociales.",
      tags: ["Frontend", "Comunidad", "Gestión de Eventos"],
    },
    gcatcode: {
      description: "Plataformas Web y Portafolio. Construcción de plataformas web responsivas utilizando Astro, Tailwind CSS y TypeScript, alcanzando métricas de alto rendimiento en Lighthouse.",
      tags: ["Astro", "Tailwind CSS", "TypeScript"],
    },
  },
  projectsPage: {
    heading: "Proyectos Destacados",
    intro: "Una colección de mis trabajos recientes que abarcan ingeniería de IA, desarrollo web y plataformas comunitarias.",
    descriptionOverrides: {
      gcatcode: "Plataformas Web y Portafolio. Construcción de plataformas web responsivas utilizando Astro, Tailwind CSS y TypeScript, alcanzando métricas de alto rendimiento en Lighthouse.",
    },
  },
  education: {
    graduatedLabel: "Graduado",
    licenseLabel: "Cédula Profesional (Federal)",
    entries: {
      ceti: {
        degree: "Licenciatura en Ingeniería en Desarrollo de Software",
        degreeAlt: "Bachelor of Science in Software Development Engineering",
      },
      udg: {
        degree: "Técnico Profesional en Informática",
        degreeAlt: "Professional Technician in Computer Science",
      },
    },
  },
  skills: {
    categories: {
      backend: "Backend y Núcleo",
      ai: "Ingeniería de IA y Metodologías",
      databases: "Bases de Datos y Sistemas Empresariales",
      cloud: "Nube y DevOps",
      frontend: "Frontend y Desarrollo Web",
      testing: "Testing y Calidad",
    },
    terms: {
      dependencyInjection: "Inyección de Dependencias",
      restfulApis: "APIs RESTful",
      oop: "POO",
      designPatterns: "Patrones de Diseño",
      aiSdlc: "Ciclo de Vida con IA (SDLC)",
      promptEngineering: "Ingeniería de Prompts y Harness",
      rapidPrototyping: "Prototipado Rápido",
      agile: "Scrum / Ágil",
      selfLearning: "Aprendizaje Continuo",
      storedProcedures: "Procedimientos Almacenados",
      queryOptimization: "Optimización de Consultas",
      mesSap: "Básicos de MES y SAP",
      qaIncidentPrevention: "QA y Prevención de Incidentes",
      technicalDocumentation: "Documentación Técnica",
    },
  },
  footer: {
    builtWith: "Built with 💚🎲 and Astro.",
  },
} satisfies Dictionary;
