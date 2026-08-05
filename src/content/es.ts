import type { Content } from "./types";

export const es: Content = {
  nav: { about: "Perfil", work: "Proyectos", experience: "Experiencia", skills: "Skills", cta: "Hablemos" },
  hero: {
    eyebrow: "Ingeniero de Software",
    name1: "Manuel",
    name2: "Rodriguez",
    role: "Ingeniero de Software Experto · React / React Native",
    intro:
      "Construyo y escalo aplicaciones móviles, enfocado en el rendimiento, la fiabilidad y el impacto real.",
    chips: ["Tech Lead @ Qubika", "Especialista en React Native", "Desarrollo asistido por IA"],
    ctaWork: "Ver proyectos",
    ctaContact: "Contacto",
  },
  clientsLabel: "Con la confianza de equipos en",
  about: {
    kicker: "Perfil",
    title: "Ingeniería senior, con foco en producto.",
    paras: [
      "Soy Ingeniero de Software Experto (Tech Lead) enfocado en React y React Native, con experiencia construyendo aplicaciones móviles y liderando equipos a través de desafíos técnicos complejos.",
      "También he participado en iniciativas de desarrollo asistido por IA e innovación, ayudando a los equipos a adoptar nuevas herramientas y formas de trabajar de manera práctica y real.",
      "Más allá de la entrega, disfruto mentorear, compartir conocimiento y contribuir al crecimiento de otros desarrolladores.",
      "Me interesa especialmente indagar en problemas complejos, entender cómo funcionan las cosas por dentro y construir soluciones que resistan en escenarios reales.",
    ],
  },
  work: { kicker: "Trabajo destacado", title: "Productos reales, en producción." },
  projects: [
    {
      n: "01",
      tag: "App en producción",
      title: "Pasión Mi Club",
      role: "Líder React Native",
      desc: "Una app móvil para comunidades deportivas y el engagement de clubes — los miembros se suman a los partidos (fútbol y más), gestionan una billetera y pagos, y acceden a un ecosistema de servicios que abarca transporte, comida y más.",
      points: [
        "Líder de frontend / React Native — decisiones de arquitectura",
        "Rendimiento y UX en un dominio complejo y en tiempo real",
        "Integración con el backend vía GraphQL y APIs REST",
      ],
      tags: ["React Native", "GraphQL", "Pagos", "Tiempo real"],
      link: "https://www.pasionmiclub.com/",
      linkLabel: "pasionmiclub.com",
      shot: "Pasión Mi Club — captura de la app",
      image: "/images/pasion-mi-club.png",
    },
    {
      n: "02",
      tag: "Producto personal",
      title: "Miga",
      role: "Solo · de punta a punta",
      desc: "Un proyecto personal llevado de la idea a una app publicada. Fui dueño de cada capa — la visión de producto, la arquitectura y las decisiones técnicas — construyendo más allá del trabajo de cliente para resolver un problema que me importaba.",
      points: [
        "Responsabilidad de punta a punta, diseñado y construido en solitario",
        "Visión de producto guiando cada decisión técnica",
        "Publicado y mantenido de forma independiente",
      ],
      tags: ["React Native", "Expo", "Producto"],
      link: "https://migatheapp.org/",
      linkLabel: "migatheapp.org",
      shot: "Miga — captura de la app",
      image: "/images/miga.png",
    },
  ],
  exp: { kicker: "Experiencia", title: "Dónde trabajé." },
  jobs: [
    {
      company: "Qubika",
      role: "Ingeniero de Software Experto · Tech Lead",
      period: "Actualidad",
      link: "https://qubika.com",
      linkLabel: "qubika.com",
      points: [
        "Lidero los esfuerzos de frontend entre equipos — decisiones de arquitectura, debugging complejo y dirección técnica para apps móviles escalables.",
        "Accelerate AI Studio — integrando herramientas de IA en flujos reales de ingeniería, producto y diseño.",
        "Líder del Innovation Team — investigando nuevas tecnologías, validando ideas con POCs y compartiendo hallazgos en charlas internas.",
        "Construí el training path de React Native; contribuí a los frameworks de carrera, charlas internas y entrevistas.",
      ],
    },
    {
      company: "Nareia",
      role: "Desarrollador Mobile · Xamarin.Forms",
      period: "Antes",
      link: "https://nareia.com.uy",
      linkLabel: "nareia.com.uy",
      points: [
        "Mi primera experiencia mobile, construyendo con Xamarin.Forms.",
        "Afiné adaptabilidad, ownership y colaboración cercana con el cliente.",
      ],
    },
  ],
  skills: { kicker: "Skills", title: "Con qué trabajo." },
  skillGroups: [
    { title: "Frontend / Mobile", items: ["React Native", "Expo", "TypeScript", "React"] },
    {
      title: "Arquitectura e ingeniería",
      items: ["Arquitectura frontend escalable", "Optimización de rendimiento", "Debugging de problemas complejos"],
    },
    { title: "Herramientas y ecosistema", items: ["React Query", "GraphQL / AWS Amplify", "Navegación", "Módulos nativos"] },
    { title: "Más allá del código", items: ["Desarrollo asistido por IA", "Mentoría", "Liderazgo técnico"] },
  ],
  contact: {
    kicker: "Contacto",
    title: "Construyamos algo confiable.",
    sub: "Disponible para trabajo senior y de tech lead en React y React Native. Las formas más rápidas de contactarme:",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
  footer: "Hecho con dedicación · 2026",
};
