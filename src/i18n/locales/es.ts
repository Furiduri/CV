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
    landing: {
      title: "GCatcode | Soluciones tecnológicas a tu medida",
      description: "Creamos sitios web, apps móviles y sistemas de escritorio a la medida de tu negocio. Entregas cada {cycleWeeks} semanas, pagas por resultados y la primera cita es gratis, en línea o presencial en Guadalajara.",
    },
    terms: {
      title: "Términos y condiciones | GCatcode",
      description: "Términos y condiciones de los servicios de GCatcode: precios con IVA incluido, desarrollo por ciclos, garantía de {warrantyDays} días y legislación aplicable.",
    },
    privacy: {
      title: "Aviso de privacidad | GCatcode",
      description: "Aviso de privacidad integral de GCatcode: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
    },
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    switchLanguage: "Cambiar Idioma",
    mainNav: "Navegación principal",
    brandHome: "GCatcode, ir al inicio",
    services: "Servicios",
    method: "Método",
    caseStudy: "Caso real",
    about: "Sobre mí",
    faq: "Preguntas",
    contactCta: "Cita gratis",
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
  landing: {
    whatsappMessages: {
      general: "Hola, GCatcode. Me interesa optimizar mi negocio con tecnología y me gustaría platicar sobre mi caso.",
      freeCall: "Hola, GCatcode. Me gustaría agendar la cita gratuita de {minutes} minutos para platicar sobre mi negocio.",
      advisory: "Hola, GCatcode. Me interesa la asesoría técnica por hora. ¿Me pueden dar más información?",
    },
    newTabNote: "(abre WhatsApp en una pestaña nueva)",
    hero: {
      eyebrow: "Soluciones tecnológicas a tu medida",
      title: "Tu negocio debería crecer, no estancarse en tareas repetitivas.",
      subtitle: "Creamos la tecnología que necesitas para optimizar tu tiempo. Olvídate del software complicado y caro: en GCatcode diseñamos soluciones digitales a tu medida, paso a paso, con resultados desde la primera entrega.",
      primaryCta: "Quiero optimizar mi negocio",
      secondaryCta: "Agenda tu cita gratis",
      note: "Primera cita gratis y sin compromiso, de hasta {minutes} minutos, en línea o presencial en la Zona Metropolitana de Guadalajara.",
    },
    problem: {
      title: "¿Te suena familiar?",
      intro: "Muchos negocios pequeños pierden horas cada semana por las mismas razones:",
      items: [
        {
          title: "Tareas manuales que se repiten",
          text: "Capturas, reportes y seguimientos que haces a mano una y otra vez, y que te quitan tiempo para lo importante.",
        },
        {
          title: "Información dispersa",
          text: "Datos repartidos entre hojas de cálculo, chats de WhatsApp y notas, difíciles de encontrar cuando más los necesitas.",
        },
        {
          title: "Software caro o que no se adapta",
          text: "Herramientas que pagas cada mes, pero que no se ajustan a la forma en que trabaja tu negocio.",
        },
      ],
    },
    services: {
      title: "Lo que hacemos por tu negocio",
      intro: "Soluciones digitales pensadas para tu forma de trabajar, sin tecnicismos innecesarios.",
      items: {
        web: {
          title: "Sitios y plataformas web",
          text: "Desde un sitio que presente tu negocio hasta plataformas con panel de administración para gestionar tu operación.",
        },
        mobile: {
          title: "Aplicaciones móviles",
          text: "Apps para que tú, tu equipo o tus clientes tengan la información y las herramientas a la mano.",
        },
        desktop: {
          title: "Sistemas de escritorio a la medida",
          text: "Programas para tu computadora que automatizan procesos internos y se ajustan a tu operación.",
        },
        advisory: {
          title: "Asesoría y capacitación",
          text: "Te ayudamos a elegir, configurar y aprovechar la tecnología que ya existe, y capacitamos a tu equipo para usarla.",
        },
      },
    },
    method: {
      title: "Un método pensado para tu tranquilidad y tu presupuesto.",
      intro: "No te vendemos un proyecto enorme e incierto. Trabajamos por ciclos cortos y claros para que veas resultados rápidos y mantengas el control de tu inversión.",
      points: {
        cycles: {
          title: "Entregas rápidas (ciclos de {cycleWeeks} semanas)",
          text: "Trabajamos en periodos fijos de {cycleDays} días hábiles; recibes avances constantes sin esperar meses.",
        },
        results: {
          title: "Pagas por resultados, no por horas",
          text: "Cada ciclo cierra con una función clave que ya puedes usar en tu negocio (web, móvil o escritorio).",
        },
        flexibility: {
          title: "Flexibilidad total",
          text: "¿Tuviste una idea nueva? Si aún no empezamos un módulo, lo cambiamos sin costo extra.",
        },
      },
    },
    trust: {
      title: "Tu información y tu negocio están seguros.",
      intro: "Usamos Inteligencia Artificial para desarrollar más rápido y reducir costos, pero la calidad y la seguridad las garantiza la experiencia humana.",
      privacy: {
        title: "Cuidamos tus datos",
        text: "Trabajamos en entornos seguros y tratamos tu información conforme a nuestro",
        linkLabel: "aviso de privacidad",
      },
      review: {
        title: "Revisión humana siempre",
        text: "Cada detalle de tu proyecto se revisa y aprueba antes de entregártelo.",
      },
      warranty: {
        title: "Garantía de {warrantyDays} días",
        text: "Corregimos sin costo cualquier error en lo entregado durante los {warrantyDays} días siguientes a la entrega.",
        linkLabel: "Consulta los términos",
      },
    },
    about: {
      title: "Sobre mí",
      avatarAlt: "Logo de GCatcode",
      intro: "Soy Jorge Osvaldo Perez Mendoza, Ingeniero en Desarrollo de Software titulado (cédula profesional {license}). Llevo más de {years} años ayudando a empresas a resolver problemas complejos con tecnología.",
      missionLabel: "Mi misión",
      mission: "Traducir tus dolores de cabeza diarios en plataformas, aplicaciones o sistemas que simplemente funcionan.",
      cvLink: "Ver mi CV",
    },
    freeCall: {
      title: "¿No sabes por dónde empezar? Hablemos.",
      text: "A veces, el mayor obstáculo es no saber qué tecnología necesita tu negocio. Agenda una cita gratis y sin compromiso de hasta {minutes} minutos, en línea o presencial en la Zona Metropolitana de Guadalajara (ZMG): escuchamos tu problema y te orientamos hacia la solución tecnológica ideal, en lenguaje claro.",
      badge: "Gratis",
      details: [
        "Hasta {minutes} minutos",
        "Videollamada o presencial en la ZMG",
        "Sin compromiso",
      ],
      cta: "Reservar mi cita gratis",
      advisory: {
        title: "Asesoría, capacitación y soporte técnico",
        price: "${rate} MXN",
        unit: "por hora",
        taxNote: "IVA incluido",
        intro: "Para cuando necesitas ayuda puntual, sin iniciar un proyecto:",
        examples: [
          "Aprender a usar una plataforma o herramienta que ya existe en el mercado.",
          "Capacitar a tu equipo en las herramientas digitales de tu negocio.",
          "Resolver problemas técnicos generales con el software que ya usas.",
        ],
        cta: "Solicitar asesoría",
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      items: {
        freeCall: {
          question: "¿La cita inicial tiene costo?",
          answer: "No. La cita inicial es gratis y sin compromiso, y dura hasta {minutes} minutos.",
        },
        inPerson: {
          question: "¿Atienden en persona?",
          answer: "Sí, en la Zona Metropolitana de Guadalajara. También atendemos en línea por videollamada.",
        },
        advisoryPrice: {
          question: "¿Cuánto cuesta la asesoría?",
          answer: "La asesoría, capacitación y soporte técnico cuestan ${rate} MXN por hora, IVA incluido.",
        },
        projectPayment: {
          question: "¿Cómo se paga un proyecto?",
          answer: "Por ciclos de {cycleWeeks} semanas ({cycleDays} días hábiles). Pagas por las funciones que te entregamos funcionando, no por horas.",
        },
        warranty: {
          question: "¿Qué cubre la garantía?",
          answer: "Durante los {warrantyDays} días siguientes a la entrega corregimos sin costo los defectos en lo entregado. No cubre funciones nuevas, cambios de alcance ni fallas causadas por modificaciones de terceros.",
        },
        ai: {
          question: "¿Usan IA con mis datos?",
          answer: "Usamos Inteligencia Artificial para desarrollar más rápido, pero todo pasa por revisión humana antes de entregártelo. Tus datos se tratan conforme a nuestro aviso de privacidad.",
        },
      },
      termsLink: "Consulta los términos y condiciones",
      privacyLink: "Lee el aviso de privacidad",
    },
    finalCta: {
      title: "¿Listo para dejar atrás las tareas repetitivas?",
      text: "Cuéntanos qué le quita tiempo a tu negocio y te diremos cómo podemos ayudarte.",
      cta: "Escríbenos por WhatsApp",
      emailLabel: "¿Prefieres el correo? Escríbenos a",
    },
    images: {
      hero: "Comerciante sonriente con el pulgar arriba detrás del mostrador de su tienda",
      problem: "Escritorio cubierto de pilas de papeles y carpetas",
      services: "Dueña de negocio sonriente cobrando a un cliente en una terminal de punto de venta",
      method: "Dos personas planean un proyecto con notas adhesivas en una pared de vidrio",
    },
    photoCredits: { lead: "Fotos de", on: "en" },
  },
  caseStudies: {
    juegalajara: {
      eyebrow: "Caso real",
      title: "Juegalajara: la comunidad de juegos de mesa de Guadalajara, en un solo lugar",
      intro: "Desarrollamos de principio a fin la plataforma web de Juegalajara. Además, conocemos la comunidad desde dentro: participamos en su coordinación, con eventos, difusión digital y alianzas con el estado y otros aliados.",
      challengeLabel: "El reto",
      challenge: "La información de la comunidad (eventos, sedes aliadas y grupos de juego) estaba dispersa entre chats y redes sociales, y era difícil saber qué, cuándo y dónde se jugaba.",
      solutionLabel: "Lo que construimos",
      solution: "Una plataforma web bilingüe (español e inglés) que reúne todo en un mismo sitio:",
      features: [
        "Panel de administración con inicio de sesión para gestionar eventos, sedes aliadas y grupos.",
        "Eventos recurrentes, sin tener que capturarlos una y otra vez.",
        "Opción para compartir la agenda de un día como imagen.",
        "Ambientes separados de pruebas y producción para publicar cambios con seguridad.",
      ],
      resultLabel: "El resultado",
      result: "La comunidad tiene un punto de referencia claro y actualizado, y el equipo organizador administra la información desde un solo panel, sin depender de mensajes dispersos.",
      stackLabel: "Tecnologías",
      linkLabel: "Visitar juegalajara.mx",
      images: {
        desktop: "Página de inicio de juegalajara.mx en una computadora",
        mobile: "Página de inicio de juegalajara.mx en un celular",
      },
    },
  },
  legal: {
    updatedLabel: "Última actualización:",
    updatedDate: "2 de octubre de 2026",
    prevailNote: "Este documento también está disponible en inglés. En caso de discrepancia entre versiones, prevalece la versión en español.",
    backHome: "Volver al inicio",
    terms: {
      heading: "Términos y condiciones",
      intro: "Estos términos y condiciones regulan la contratación de los servicios que se ofrecen bajo la marca {brand}. Al solicitar o contratar cualquiera de nuestros servicios, aceptas estos términos.",
      sections: [
        {
          title: "Identificación del proveedor",
          blocks: [
            "Los servicios de {brand} son prestados por {name}, con sede en {location}.",
            "Correo electrónico: {email}. Teléfono y WhatsApp: {phone}.",
          ],
        },
        {
          title: "Servicios",
          blocks: [
            "{brand} ofrece los siguientes servicios:",
            [
              "Cita inicial de diagnóstico, gratuita y sin compromiso.",
              "Asesoría técnica, capacitación y soporte técnico general, incluida la orientación sobre el uso de plataformas y herramientas existentes en el mercado.",
              "Desarrollo de soluciones a la medida: sitios y plataformas web, aplicaciones móviles y sistemas de escritorio.",
            ],
          ],
        },
        {
          title: "Precios",
          blocks: [
            "Todos los precios se expresan en pesos mexicanos (MXN) e incluyen el Impuesto al Valor Agregado (IVA).",
            [
              "Cita inicial: gratuita, con una duración de hasta {minutes} minutos, por videollamada o presencial en la Zona Metropolitana de Guadalajara.",
              "Asesoría, capacitación y soporte técnico: ${rate} MXN por hora, IVA incluido.",
              "Desarrollo a la medida: se cotiza por ciclo de desarrollo, de acuerdo con las funciones acordadas para cada ciclo.",
            ],
          ],
        },
        {
          title: "Desarrollo por ciclos",
          blocks: [
            [
              "Los proyectos a la medida se desarrollan en ciclos de {cycleWeeks} semanas ({cycleDays} días hábiles).",
              "Cada ciclo cierra con la entrega de funciones operativas que puedes usar en tu negocio.",
              "El pago se realiza por las funciones entregadas y funcionando, no por horas trabajadas.",
              "Los módulos que aún no se hayan iniciado pueden cambiarse por otros sin costo adicional.",
            ],
          ],
        },
        {
          title: "Garantía",
          blocks: [
            "Lo entregado cuenta con una garantía de {warrantyDays} días naturales, contados a partir de la fecha de entrega.",
            [
              "Cubre: la corrección sin costo de defectos en lo entregado.",
              "No cubre: funciones nuevas, cambios de alcance ni fallas causadas por modificaciones realizadas por terceros.",
            ],
            "Para hacer válida la garantía, escríbenos dentro de ese periodo por WhatsApp al {phone} o por correo a {email}, describiendo el defecto que encontraste.",
          ],
        },
        {
          title: "Modificaciones a los términos",
          blocks: [
            "Podemos actualizar estos términos en cualquier momento. La versión vigente es la publicada en este sitio, con su fecha de última actualización. Los servicios ya contratados se rigen por los términos vigentes al momento de su contratación.",
          ],
        },
        {
          title: "Contacto",
          blocks: [
            "Para cualquier duda sobre estos términos, escríbenos a {email} o por WhatsApp al {phone}.",
          ],
        },
        {
          title: "Legislación aplicable y jurisdicción",
          blocks: [
            "Estos términos se rigen por las leyes de los Estados Unidos Mexicanos.",
            "En materia de protección al consumidor, puedes acudir a la Procuraduría Federal del Consumidor (Profeco).",
            "Para la interpretación y el cumplimiento de estos términos, las partes se someten a los tribunales competentes de Zapopan o Guadalajara, Jalisco.",
          ],
        },
      ],
    },
    privacy: {
      heading: "Aviso de privacidad",
      intro: "En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, publicada en el Diario Oficial de la Federación el 20 de marzo de 2025, te informamos cómo tratamos tus datos personales.",
      sections: [
        {
          title: "Responsable",
          blocks: [
            "{name}, quien ofrece sus servicios bajo la marca {brand}, con sede en {location}, es responsable del tratamiento de tus datos personales.",
            "Correo electrónico: {email}. Teléfono y WhatsApp: {phone}.",
          ],
        },
        {
          title: "Datos personales que recabamos",
          blocks: [
            "Recabamos los siguientes datos cuando nos contactas por WhatsApp o correo electrónico, o durante una cita:",
            [
              "Nombre.",
              "Número de teléfono.",
              "Correo electrónico.",
              "Información sobre tu negocio que decidas compartirnos.",
              "Datos fiscales, únicamente cuando solicites una factura.",
            ],
            "No recabamos datos personales sensibles.",
          ],
        },
        {
          title: "Finalidades del tratamiento",
          blocks: [
            "Usamos tus datos personales para las siguientes finalidades, necesarias para la relación que tienes con nosotros:",
            [
              "Atender tus solicitudes y responder tus mensajes.",
              "Agendar citas.",
              "Elaborar cotizaciones y prestarte los servicios contratados.",
              "Emitir facturas.",
            ],
            "No usamos tus datos para finalidades secundarias, como publicidad o mercadotecnia.",
          ],
        },
        {
          title: "Transferencias de datos",
          blocks: [
            "No transferimos tus datos personales a terceros, salvo cuando una ley o una autoridad competente lo exija.",
            "Si nos contactas por WhatsApp, esa plataforma es operada por Meta y la información que envíes por ese medio también se rige por sus propias políticas de privacidad.",
          ],
        },
        {
          title: "Derechos ARCO y revocación del consentimiento",
          blocks: [
            "Tienes derecho a acceder a tus datos personales, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así como a revocar el consentimiento que nos hayas otorgado.",
            "Para ejercer cualquiera de estos derechos, envía tu solicitud a {email} con la siguiente información:",
            [
              "Tu nombre y un medio para comunicarte contigo.",
              "Los documentos que acrediten tu identidad o, en su caso, la de tu representante legal.",
              "La descripción clara de los datos personales y del derecho que deseas ejercer.",
              "Cualquier otro elemento que facilite la localización de tus datos.",
            ],
            "Responderemos tu solicitud en los plazos que establece la ley.",
          ],
        },
        {
          title: "Uso de cookies y tecnologías de rastreo",
          blocks: [
            "Este sitio no utiliza cookies, herramientas de analítica ni otras tecnologías de rastreo.",
          ],
        },
        {
          title: "Cambios al aviso de privacidad",
          blocks: [
            "Podemos modificar este aviso de privacidad. Publicaremos cualquier cambio en esta página, junto con su fecha de última actualización.",
          ],
        },
        {
          title: "Autoridad",
          blocks: [
            "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la Secretaría Anticorrupción y Buen Gobierno.",
          ],
        },
      ],
    },
  },
  footer: {
    builtWith: "Built with 💚🎲 and Astro.",
    tagline: "Soluciones tecnológicas a tu medida.",
    legalNav: "Enlaces del sitio",
    home: "Inicio",
    cv: "CV",
    terms: "Términos y condiciones",
    privacy: "Aviso de privacidad",
    whatsapp: "WhatsApp",
    email: "Correo",
    rights: "Todos los derechos reservados.",
  },
} satisfies Dictionary;
