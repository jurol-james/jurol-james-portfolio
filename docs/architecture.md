# Architecture decisions

## Static React application

The portfolio has no user accounts, dynamic data source, or server-side workflow. Vite produces static assets that Vercel can host directly. Adding a backend would add maintenance without helping the portfolio.

## Data separated from presentation

Profile, experience, skills, and projects live in `src/data/` as typed objects. Components render those objects and contain no invented fallback URLs. Optional links are omitted when unknown. This makes factual review and future updates straightforward.

## Single-page information hierarchy

The page moves from positioning and engineering focus to technical capabilities, professional experience, a small project section, interests, and contact. CoDev/Tellworks warehouse and logistics work receives the most visible experience detail. The project section remains secondary and explicitly labels experimental cryptography work.

## Styling and interaction

Plain CSS keeps the site small and easy to maintain. The design uses typography, whitespace, borders, and a restrained palette. The only required stateful interaction is the mobile navigation menu. Semantic sections, visible focus states, a skip link, and reduced-motion support are included.

## Testing and CI

Vitest and React Testing Library verify key content, mobile menu behavior, and missing-link handling. CI runs install, lint, TypeScript checking, tests, and the production build. Browser-based visual review at desktop and mobile sizes is still useful before publication.
