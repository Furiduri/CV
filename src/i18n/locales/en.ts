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
    landing: {
      title: "GCatcode | Custom technology solutions",
      description: "We build custom websites, mobile apps and desktop systems for your business. Deliveries every {cycleWeeks} weeks, you pay for results, and the first meeting is free, online or in person in Guadalajara.",
    },
    terms: {
      title: "Terms and Conditions | GCatcode",
      description: "Terms and conditions for GCatcode services: VAT-inclusive pricing, cycle-based development, {warrantyDays}-day warranty and governing law.",
    },
    privacy: {
      title: "Privacy Notice | GCatcode",
      description: "GCatcode's comprehensive privacy notice: what personal data we collect, what we use it for and how to exercise your ARCO rights.",
    },
  },
  nav: {
    home: "Home",
    projects: "Projects",
    switchLanguage: "Cambiar Idioma",
    mainNav: "Main navigation",
    brandHome: "GCatcode, go to home page",
    services: "Services",
    method: "Method",
    caseStudy: "Case study",
    about: "About me",
    faq: "FAQ",
    contactCta: "Free meeting",
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
  landing: {
    whatsappMessages: {
      general: "Hi, GCatcode. I'm interested in optimizing my business with technology and would like to talk about my case.",
      freeCall: "Hi, GCatcode. I'd like to book the free {minutes}-minute meeting to talk about my business.",
      advisory: "Hi, GCatcode. I'm interested in the hourly technical advisory. Could you give me more information?",
    },
    newTabNote: "(opens WhatsApp in a new tab)",
    hero: {
      eyebrow: "Custom technology solutions",
      title: "Your business should grow, not get stuck on repetitive tasks.",
      subtitle: "We build the technology you need to make the most of your time. Forget complicated, expensive software: at GCatcode we design digital solutions tailored to you, step by step, with results from the very first delivery.",
      primaryCta: "I want to optimize my business",
      secondaryCta: "Book your free meeting",
      note: "First meeting free and with no commitment, up to {minutes} minutes, online or in person in the Guadalajara metropolitan area.",
    },
    problem: {
      title: "Sound familiar?",
      intro: "Many small businesses lose hours every week for the same reasons:",
      items: [
        {
          title: "Repetitive manual tasks",
          text: "Data entry, reports and follow-ups you do by hand over and over, taking time away from what matters.",
        },
        {
          title: "Scattered information",
          text: "Data spread across spreadsheets, WhatsApp chats and notes, hard to find when you need it most.",
        },
        {
          title: "Software that is expensive or doesn't fit",
          text: "Tools you pay for every month that don't adapt to the way your business works.",
        },
      ],
    },
    services: {
      title: "What we do for your business",
      intro: "Digital solutions designed around the way you work, without unnecessary jargon.",
      items: {
        web: {
          title: "Websites and web platforms",
          text: "From a website that presents your business to platforms with an admin panel to manage your operations.",
        },
        mobile: {
          title: "Mobile apps",
          text: "Apps that put information and tools at your fingertips, and at those of your team or your customers.",
        },
        desktop: {
          title: "Custom desktop systems",
          text: "Programs for your computer that automate internal processes and fit the way you operate.",
        },
        advisory: {
          title: "Advisory and training",
          text: "We help you choose, set up and get the most out of existing technology, and we train your team to use it.",
        },
      },
    },
    method: {
      title: "A method designed for your peace of mind and your budget.",
      intro: "We don't sell you a huge, uncertain project. We work in short, clear cycles so you see results quickly and stay in control of your investment.",
      points: {
        cycles: {
          title: "Fast deliveries ({cycleWeeks}-week cycles)",
          text: "We work in fixed periods of {cycleDays} business days; you get steady progress without waiting months.",
        },
        results: {
          title: "You pay for results, not hours",
          text: "Every cycle ends with a key feature you can already use in your business (web, mobile or desktop).",
        },
        flexibility: {
          title: "Full flexibility",
          text: "Got a new idea? If we haven't started a module yet, we swap it at no extra cost.",
        },
      },
    },
    caseStudy: {
      eyebrow: "Case study",
      title: "Juegalajara: Guadalajara's board game community, all in one place",
      intro: "We built Juegalajara's web platform from start to finish. We also know the community from the inside: we take part in coordinating it, with events, digital outreach and alliances with the state and other partners.",
      challengeLabel: "The challenge",
      challenge: "Community information (events, partner venues and game groups) was scattered across chats and social media, making it hard to know what was being played, when and where.",
      solutionLabel: "What we built",
      solution: "A bilingual web platform (Spanish and English) that brings everything together in one place:",
      features: [
        "Admin panel with login to manage events, partner venues and groups.",
        "Recurring events, without entering them over and over.",
        "Option to share a day's schedule as an image.",
        "Separate staging and production environments to publish changes safely.",
      ],
      resultLabel: "The result",
      result: "The community has a clear, up-to-date point of reference, and the organizing team manages the information from a single panel instead of relying on scattered messages.",
      stackLabel: "Technologies",
      linkLabel: "Visit juegalajara.mx",
    },
    trust: {
      title: "Your information and your business are safe.",
      intro: "We use Artificial Intelligence to develop faster and reduce costs, but quality and security are guaranteed by human expertise.",
      privacy: {
        title: "We take care of your data",
        text: "We work in secure environments and handle your information in accordance with our",
        linkLabel: "privacy notice",
      },
      review: {
        title: "Always human review",
        text: "Every detail of your project is reviewed and approved before it is delivered to you.",
      },
      warranty: {
        title: "{warrantyDays}-day warranty",
        text: "We fix any defect in what we delivered at no cost during the {warrantyDays} days after delivery.",
        linkLabel: "Read the terms",
      },
    },
    about: {
      title: "About me",
      avatarAlt: "GCatcode logo",
      intro: "I'm Jorge Osvaldo Perez Mendoza, a licensed Software Development Engineer (Mexican professional license {license}). For more than {years} years I have been helping companies solve complex problems with technology.",
      missionLabel: "My mission",
      mission: "To turn your daily headaches into platforms, apps or systems that simply work.",
      cvLink: "View my CV",
    },
    freeCall: {
      title: "Not sure where to start? Let's talk.",
      text: "Sometimes the biggest obstacle is not knowing what technology your business needs. Book a free, no-commitment meeting of up to {minutes} minutes, online or in person in the Guadalajara metropolitan area (ZMG): we listen to your problem and point you toward the ideal technology solution, in plain language.",
      badge: "Free",
      details: [
        "Up to {minutes} minutes",
        "Video call or in person in the ZMG",
        "No commitment",
      ],
      cta: "Book my free meeting",
      advisory: {
        title: "Advisory, training and technical support",
        price: "${rate} MXN",
        unit: "per hour",
        taxNote: "VAT (IVA) included",
        intro: "For when you need specific help without starting a project:",
        examples: [
          "Learning how to use a platform or tool that already exists on the market.",
          "Training your team on your business's digital tools.",
          "Solving general technical problems with the software you already use.",
        ],
        cta: "Request advisory",
      },
    },
    faq: {
      title: "Frequently asked questions",
      items: {
        freeCall: {
          question: "Does the first meeting cost anything?",
          answer: "No. The first meeting is free and with no commitment, and it lasts up to {minutes} minutes.",
        },
        inPerson: {
          question: "Do you meet in person?",
          answer: "Yes, in the Guadalajara metropolitan area. We also meet online by video call.",
        },
        advisoryPrice: {
          question: "How much does the advisory cost?",
          answer: "Advisory, training and technical support cost ${rate} MXN per hour, VAT (IVA) included.",
        },
        projectPayment: {
          question: "How is a project paid?",
          answer: "In {cycleWeeks}-week cycles ({cycleDays} business days). You pay for the features we deliver working, not for hours.",
        },
        warranty: {
          question: "What does the warranty cover?",
          answer: "During the {warrantyDays} days after delivery, we fix defects in what we delivered at no cost. It does not cover new features, scope changes or failures caused by third-party modifications.",
        },
        ai: {
          question: "Do you use AI with my data?",
          answer: "We use Artificial Intelligence to develop faster, but everything goes through human review before it is delivered to you. Your data is handled in accordance with our privacy notice.",
        },
      },
      termsLink: "Read the terms and conditions",
      privacyLink: "Read the privacy notice",
    },
    finalCta: {
      title: "Ready to leave repetitive tasks behind?",
      text: "Tell us what is eating up your business's time and we'll tell you how we can help.",
      cta: "Message us on WhatsApp",
      emailLabel: "Prefer email? Write to us at",
    },
  },
  legal: {
    updatedLabel: "Last updated:",
    updatedDate: "October 2, 2026",
    prevailNote: "This is an English translation of the Spanish original. In case of any discrepancy between versions, the Spanish version prevails.",
    backHome: "Back to home",
    terms: {
      heading: "Terms and Conditions",
      intro: "These terms and conditions govern the hiring of the services offered under the {brand} brand. By requesting or hiring any of our services, you accept these terms.",
      sections: [
        {
          title: "Provider identification",
          blocks: [
            "{brand} services are provided by {name}, based in {location}.",
            "Email: {email}. Phone and WhatsApp: {phone}.",
          ],
        },
        {
          title: "Services",
          blocks: [
            "{brand} offers the following services:",
            [
              "Initial discovery meeting, free and with no commitment.",
              "Technical advisory, training and general technical support, including guidance on using existing platforms and tools on the market.",
              "Custom solution development: websites and web platforms, mobile apps and desktop systems.",
            ],
          ],
        },
        {
          title: "Prices",
          blocks: [
            "All prices are expressed in Mexican pesos (MXN) and include Value Added Tax (IVA).",
            [
              "Initial meeting: free, lasting up to {minutes} minutes, by video call or in person in the Guadalajara metropolitan area.",
              "Advisory, training and technical support: ${rate} MXN per hour, VAT (IVA) included.",
              "Custom development: quoted per development cycle, according to the features agreed for each cycle.",
            ],
          ],
        },
        {
          title: "Cycle-based development",
          blocks: [
            [
              "Custom projects are developed in {cycleWeeks}-week cycles ({cycleDays} business days).",
              "Each cycle ends with the delivery of working features you can use in your business.",
              "Payment is made for features delivered and working, not for hours worked.",
              "Modules that have not been started yet can be swapped for others at no additional cost.",
            ],
          ],
        },
        {
          title: "Warranty",
          blocks: [
            "Deliverables carry a warranty of {warrantyDays} calendar days from the delivery date.",
            [
              "Covers: free correction of defects in what was delivered.",
              "Does not cover: new features, scope changes or failures caused by modifications made by third parties.",
            ],
            "To claim the warranty, contact us within that period by WhatsApp at {phone} or by email at {email}, describing the defect you found.",
          ],
        },
        {
          title: "Changes to these terms",
          blocks: [
            "We may update these terms at any time. The current version is the one published on this site, with its last updated date. Services already hired are governed by the terms in effect at the time they were hired.",
          ],
        },
        {
          title: "Contact",
          blocks: [
            "For any questions about these terms, write to us at {email} or by WhatsApp at {phone}.",
          ],
        },
        {
          title: "Governing law and jurisdiction",
          blocks: [
            "These terms are governed by the laws of the United Mexican States.",
            "For consumer protection matters, you may contact the Federal Consumer Protection Agency (Profeco).",
            "For the interpretation and enforcement of these terms, the parties submit to the competent courts of Zapopan or Guadalajara, Jalisco.",
          ],
        },
      ],
    },
    privacy: {
      heading: "Privacy Notice",
      intro: "In compliance with Mexico's Federal Law on the Protection of Personal Data Held by Private Parties, published in the Official Gazette of the Federation (DOF) on March 20, 2025, we inform you how we handle your personal data.",
      sections: [
        {
          title: "Data controller",
          blocks: [
            "{name}, who offers services under the {brand} brand and is based in {location}, is responsible for the processing of your personal data.",
            "Email: {email}. Phone and WhatsApp: {phone}.",
          ],
        },
        {
          title: "Personal data we collect",
          blocks: [
            "We collect the following data when you contact us by WhatsApp or email, or during a meeting:",
            [
              "Name.",
              "Phone number.",
              "Email address.",
              "Information about your business that you choose to share with us.",
              "Tax information, only when you request an invoice.",
            ],
            "We do not collect sensitive personal data.",
          ],
        },
        {
          title: "Purposes of processing",
          blocks: [
            "We use your personal data for the following purposes, which are necessary for your relationship with us:",
            [
              "Handling your requests and replying to your messages.",
              "Scheduling meetings.",
              "Preparing quotes and providing the services you hire.",
              "Issuing invoices.",
            ],
            "We do not use your data for secondary purposes such as advertising or marketing.",
          ],
        },
        {
          title: "Data transfers",
          blocks: [
            "We do not transfer your personal data to third parties, except when required by law or by a competent authority.",
            "If you contact us by WhatsApp, that platform is operated by Meta, and the information you send through it is also governed by its own privacy policies.",
          ],
        },
        {
          title: "ARCO rights and withdrawal of consent",
          blocks: [
            "You have the right to access, rectify and cancel your personal data, or to object to its processing (ARCO rights), as well as to withdraw the consent you have given us.",
            "To exercise any of these rights, send your request to {email} with the following information:",
            [
              "Your name and a way to contact you.",
              "Documents proving your identity or, where applicable, that of your legal representative.",
              "A clear description of the personal data and the right you wish to exercise.",
              "Any other information that helps locate your data.",
            ],
            "We will respond to your request within the time limits established by law.",
          ],
        },
        {
          title: "Cookies and tracking technologies",
          blocks: [
            "This site does not use cookies, analytics tools or other tracking technologies.",
          ],
        },
        {
          title: "Changes to this privacy notice",
          blocks: [
            "We may modify this privacy notice. We will publish any change on this page, along with its last updated date.",
          ],
        },
        {
          title: "Authority",
          blocks: [
            "If you believe your right to the protection of personal data has been violated, you may file a complaint with the Ministry of Anti-Corruption and Good Governance (Secretaría Anticorrupción y Buen Gobierno).",
          ],
        },
      ],
    },
  },
  footer: {
    builtWith: "Built with 💚🎲 and Astro.",
    tagline: "Custom technology solutions.",
    legalNav: "Site links",
    home: "Home",
    cv: "CV",
    terms: "Terms and Conditions",
    privacy: "Privacy Notice",
    whatsapp: "WhatsApp",
    email: "Email",
    rights: "All rights reserved.",
  },
} satisfies Dictionary;
