export type Lang = "en" | "es";

export interface Service {
  icon: string;
  name: string;
  desc: string;
  price: string;
}

export type ProjectCategory = "bots" | "apps" | "soon";

export interface Project {
  id: string;
  cat: ProjectCategory;
  name: string;
  badge: string;
  sub: string;
  desc: string;
  stack: string;
  /** Text shown in the browser-frame URL bar. */
  url: string;
  /** Public path of the preview image; omit to show a placeholder. */
  image?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  /** Placeholder glyph + label, used when there is no image. */
  placeholderIcon?: string;
  placeholderLabel?: string;
}

export interface Translation {
  available: string;
  hire: string;
  nav_about: string;
  nav_contact: string;
  hero_greeting: string;
  hero_tagline: string;
  hero_sub: string;
  about_1: string;
  about_2: string;
  work_title: string;
  filter_all: string;
  filter_bots: string;
  filter_apps: string;
  filter_soon: string;
  github: string;
  projects: Project[];
  services_title: string;
  services_sub: string;
  contact_title: string;
  contact_sub: string;
  whatsapp: string;
  email: string;
  email_subject: string;
  email_body: string;
  soon: string;
  services: Service[];
}

export const skills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Tailwind",
  "Vercel AI SDK",
  "OpenAI",
  "Claude",
  "Gemini",
];

export const translations: Record<Lang, Translation> = {
  en: {
    available: "Available for freelance projects",
    hire: "Hire me",
    nav_about: "about",
    nav_contact: "contact",
    hero_greeting: "Hi, I'm Andrés Felipe.",
    hero_tagline:
      "I build web apps and AI chatbots for businesses that want to stand out.",
    hero_sub: "Full-Stack Developer · Bogotá, Colombia · Bilingual ES/EN",
    about_1:
      "I'm a software engineering student at Universidad Sergio Arboleda, Bogotá. I specialize in Next.js, React, and integrating AI into web products.",
    about_2:
      "I work with clients across LATAM and internationally, in Spanish and English. My focus: clean code, fast delivery, and products people actually want to use.",
    work_title: "selected work",
    filter_all: "All",
    filter_bots: "AI Bots",
    filter_apps: "Web Apps",
    filter_soon: "Coming soon",
    github: "GitHub",
    projects: [
      {
        id: "bizchat",
        cat: "bots",
        name: "BizChat",
        badge: "Featured",
        sub: "AI Chatbot for Business Websites",
        desc: "Configurable AI chatbot widget with multi-provider support (OpenAI, Claude, Gemini). Businesses embed it in their site so customers can ask questions, check hours, browse the menu, and request reservations — automatically. Demo: Café Noire, a fictional coffee shop in Bogotá.",
        stack: "Next.js · TypeScript · Vercel AI SDK · Tailwind CSS",
        url: "🔒 bizchat-delta.vercel.app",
        image: "/bizchat.png",
        liveUrl: "https://bizchat-delta.vercel.app",
        liveLabel: "Live Demo",
        githubUrl: "https://github.com/Pipelol0723",
      },
      {
        id: "portfolio",
        cat: "apps",
        name: "Business Websites",
        badge: "Web App",
        sub: "Need a website for your business?",
        desc: "I can build you one like this — a fast, custom one-page site — or like BizChat, with an AI chatbot built in. Tell me what your business needs and I’ll put together a site that fits.",
        stack: "React · Next.js · JetBrains Mono · IBM Plex Sans",
        url: "pipelol.dev",
        placeholderIcon: "◆",
        placeholderLabel: "this site is an example",
        githubUrl: "https://github.com/Pipelol0723",
      },
      {
        id: "soon",
        cat: "soon",
        name: "Next project",
        badge: "Coming soon",
        sub: "Open slot for a new build",
        desc: "Working on the next case study — a client project or a new AI-powered tool. Check back soon, or get in touch if you want to be the one featured here.",
        stack: "",
        url: "— tbd —",
        placeholderIcon: "＋",
        placeholderLabel: "coming soon",
      },
    ],
    services_title: "services",
    services_sub:
      "Concrete deliverables with clear pricing. Pick what fits — we can scope from there.",
    contact_title: "Have a project in mind? Let’s talk.",
    contact_sub: "Pick whichever’s easiest — I usually reply within a day.",
    whatsapp: "WhatsApp",
    email: "Email",
    email_subject: "Project inquiry — from your portfolio",
    email_body:
      "Hi Andrés, I saw your portfolio and I'd like to talk about a project.",
    soon: "coming soon",
    services: [
      {
        icon: "🤖",
        name: "AI Chatbot Integration",
        desc: "I add an AI chatbot to your website in 5–7 days. It knows your business, answers customer questions, and works 24/7 without you lifting a finger.",
        price: "From $80 USD + $20/mo",
      },
      {
        icon: "🌐",
        name: "Web App / Landing Page",
        desc: "Custom websites and React/Next.js apps. Responsive, fast, deployed on Vercel or your own hosting.",
        price: "From $150 USD",
      },
      {
        icon: "⚙️",
        name: "API & Backend",
        desc: "REST APIs and backends with Node.js or Python. Integrations, automations, and custom scripts.",
        price: "From $100 USD",
      },
    ],
  },
  es: {
    available: "Disponible para proyectos freelance",
    hire: "Contrátame",
    nav_about: "sobre-mí",
    nav_contact: "contacto",
    hero_greeting: "Hola, soy Andrés Felipe.",
    hero_tagline:
      "Desarrollo aplicaciones web y chatbots con IA para negocios que quieren diferenciarse.",
    hero_sub: "Full-Stack Developer · Bogotá, Colombia · Bilingüe ES/EN",
    about_1:
      "Soy estudiante de ingeniería de software en la Universidad Sergio Arboleda, Bogotá. Me especializo en Next.js, React y la integración de IA en productos web.",
    about_2:
      "Trabajo con clientes de LATAM e internacionales, en español e inglés. Mi enfoque: código limpio, entrega rápida y productos que la gente quiere usar.",
    work_title: "proyectos",
    filter_all: "Todos",
    filter_bots: "Bots IA",
    filter_apps: "Web Apps",
    filter_soon: "Próximamente",
    github: "GitHub",
    projects: [
      {
        id: "bizchat",
        cat: "bots",
        name: "BizChat",
        badge: "Destacado",
        sub: "Chatbot con IA para sitios de negocios",
        desc: "Widget de chatbot configurable con IA multi-proveedor (OpenAI, Claude, Gemini). Los negocios lo integran en su sitio y sus clientes pueden hacer preguntas, ver horarios, el menú y solicitar reservas — sin intervención humana. Demo: Café Noire, una cafetería ficticia en Bogotá.",
        stack: "Next.js · TypeScript · Vercel AI SDK · Tailwind CSS",
        url: "🔒 bizchat-delta.vercel.app",
        image: "/bizchat.png",
        liveUrl: "https://bizchat-delta.vercel.app",
        liveLabel: "Ver Demo",
        githubUrl: "https://github.com/Pipelol0723",
      },
      {
        id: "portfolio",
        cat: "apps",
        name: "Sitios web para negocios",
        badge: "Web App",
        sub: "¿Necesitas una página web para tu negocio?",
        desc: "Puedo hacerte una como esta — un sitio a medida, rápido y de una sola página — o como BizChat, con un chatbot con IA integrado. Cuéntame qué necesita tu negocio y armo un sitio a tu medida.",
        stack: "React · Next.js · JetBrains Mono · IBM Plex Sans",
        url: "pipelol.dev",
        placeholderIcon: "◆",
        placeholderLabel: "este sitio es un ejemplo",
        githubUrl: "https://github.com/Pipelol0723",
      },
      {
        id: "soon",
        cat: "soon",
        name: "Próximo proyecto",
        badge: "Próximamente",
        sub: "Espacio abierto para un nuevo proyecto",
        desc: "Trabajando en el próximo caso de estudio — un proyecto para cliente o una nueva herramienta con IA. Vuelve pronto, o contáctame si quieres ser tú el destacado aquí.",
        stack: "",
        url: "— por definir —",
        placeholderIcon: "＋",
        placeholderLabel: "próximamente",
      },
    ],
    services_title: "servicios",
    services_sub:
      "Entregables concretos con precios claros. Elige el que encaje — desde ahí lo aterrizamos.",
    contact_title: "¿Tienes un proyecto en mente? Hablemos.",
    contact_sub:
      "Elige lo que te quede más fácil — normalmente respondo el mismo día.",
    whatsapp: "WhatsApp",
    email: "Email",
    email_subject: "Consulta de proyecto — desde tu portafolio",
    email_body:
      "Hola Andrés, vi tu portafolio y me interesa hablar sobre un proyecto.",
    soon: "pronto",
    services: [
      {
        icon: "🤖",
        name: "Integración de Chatbot IA",
        desc: "Agrego un chatbot con IA a tu sitio web en 5–7 días. Conoce tu negocio, responde preguntas de tus clientes y trabaja 24/7 sin que tengas que hacer nada.",
        price: "Desde $320.000 COP + $80.000/mes",
      },
      {
        icon: "🌐",
        name: "Web App / Landing Page",
        desc: "Sitios web y apps React/Next.js a medida. Responsive, rápidas, con deploy en Vercel o tu propio hosting.",
        price: "Desde $600.000 COP",
      },
      {
        icon: "⚙️",
        name: "API & Backend",
        desc: "APIs REST y backends con Node.js o Python. Integraciones, automatizaciones y scripts a medida.",
        price: "Desde $400.000 COP",
      },
    ],
  },
};
