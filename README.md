# Andrés Felipe — Portfolio

Portafolio freelance de una sola página, bilingüe (ES/EN), construido a partir del diseño de Claude Design.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · deploy en Vercel.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción
npm run start    # sirve el build de producción
npm run lint     # linting
```

## Estructura

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Metadata SEO + fuentes (JetBrains Mono, IBM Plex Sans)
│   │   ├── page.tsx          # Ensambla la página (tema + grid de fondo + secciones)
│   │   └── globals.css       # Estilos base, scrollbar, animaciones
│   ├── components/
│   │   ├── Navbar.tsx        # Nav fija + toggle ES|EN + "Hire me"
│   │   ├── Hero.tsx          # Tarjeta estilo terminal con foto
│   │   ├── About.tsx         # Bio + badges de stack
│   │   ├── Projects.tsx      # Card destacada de BizChat
│   │   ├── Services.tsx      # 3 servicios con precios
│   │   ├── Contact.tsx       # WhatsApp + Email
│   │   └── Footer.tsx        # Links sociales
│   ├── context/
│   │   └── LanguageContext.tsx  # Estado de idioma (useTranslation)
│   └── lib/
│       └── i18n.ts           # Todas las traducciones ES/EN
└── public/
    ├── foto-pipe.png         # Foto de perfil
    └── bizchat.png           # Screenshot del demo de BizChat
```

## Bilingüismo

El idioma se maneja en el cliente con un React Context (`LanguageContext`) y el hook
`useTranslation()`. El toggle `EN | ES` del navbar cambia el contenido globalmente sin
recargar ni cambiar de ruta. Todas las cadenas viven en `src/lib/i18n.ts`.
Idioma por defecto: **EN** (se cambia en `LanguageProvider`).

## Cambiar el color de acento

El tema usa las variables CSS `--accent` y `--accent-hi`, definidas en `src/app/page.tsx`
(constantes `ACCENT` / `ACCENT_HI`). El diseño trae 4 paletas: verde `#3fb950` (default),
cian `#22d3ee`, ámbar `#f0a500`, magenta `#d95ce0`.

## Nota de seguridad (npm audit)

Fijado en **Next.js 14.2.35** (última de la línea 14, ya incluye el parche de seguridad de
dic-2025). `npm audit` reporta advisories de DoS adicionales que **solo aplican a apps
self-hosted** (Image Optimizer / RSC / rewrites) y cuyo único fix es saltar a Next 16
(cambio mayor, requiere React 19). En Vercel están mitigados por la plataforma. Cuando quieras,
se puede migrar a Next 16 en un paso aparte.
