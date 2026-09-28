# Architecture decisions

## Static React application

The portfolio has no user accounts, dynamic data source, or server-side workflow. Vite produces static assets that Vercel can host directly. Adding a backend would add maintenance without helping the portfolio.

## Data separated from presentation

Profile, experience, skills, and projects live in `src/data/` as typed objects. Components render those objects and contain no invented fallback URLs. The CV is copied unchanged to `public/cv/` and linked through profile data. Private project repositories remain unlinked. This makes factual review and future updates straightforward.

## Single-page information hierarchy

The page moves from positioning and engineering focus to technical capabilities, professional experience, a small project section, interests, and contact. CoDev/Tellworks warehouse and logistics work receives the most visible experience detail. The project section remains secondary and explicitly labels experimental cryptography work.

## Styling and interaction

Plain CSS keeps the site small and easy to maintain. The design uses typography, whitespace, borders, and a restrained palette. Light and dark themes share the Evergreen scale and switch semantic CSS tokens on `html[data-theme]`. A small head script applies saved or system preference before the page renders; the header toggle persists an explicit choice. Semantic sections, visible focus states, a skip link, and reduced-motion support are included.

## Testing and CI

Vitest and React Testing Library verify key content, mobile menu behavior, theme preferences, contact URLs, the CV link, and internal navigation targets. CI runs install, formatting, lint, TypeScript checking, tests, and the production build. Browser screenshots at desktop, tablet, and mobile sizes are used for visual review before publication.
