# Engineering portfolio

A static personal portfolio for an experienced software engineer working across Java backend engineering, full-stack delivery, architecture, and technical leadership. The content emphasizes warehouse and logistics systems without turning the site into a full CV.

## Stack

React, TypeScript, Vite, and plain CSS. Vitest and React Testing Library cover the important rendering and navigation behavior. GitHub Actions runs validation on pushes and pull requests.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Validation and build

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
```

The production output is in `dist/`.

## Local Git repository

This workspace supplies a read-only `.git` mount, so repository metadata lives in `.git-local/`. Use `./scripts/git-local` in place of `git` for this checkout, for example `./scripts/git-local status` or `./scripts/git-local log --oneline`. The metadata directory is ignored by Git. In a normal clone, standard `git` commands work as usual.

## Update the content

- `src/data/profile.ts`: name, initials, introduction, email, GitHub, LinkedIn, and CV link. Missing contact values intentionally render as plain text.
- `src/data/experience.ts`: work history and selected responsibilities. Review all public descriptions with your employer/client confidentiality obligations in mind.
- `src/data/skills.ts`: engineering focus, grouped capabilities, and interests.
- `src/data/projects.ts`: personal work. Add projects as typed objects; only verified URLs become links.
- `index.html`: page title, meta description, and Open Graph text. Replace `public/og-placeholder.svg` and `public/favicon.svg` if desired. Add an absolute `og:image` URL after deployment if you want social preview artwork.

Before publishing, replace the TODO identity/contact fields, verify all professional claims, and add a real canonical URL only after the production domain is known. A profile photograph is optional; the design does not require one.

## Deployment

The app is a static Vite frontend. Import this repository into Vercel, select the Vite framework preset, and use the default build command (`npm run build`) and output directory (`dist`). No server, secrets, or external infrastructure is required. Deployment resources are not created by this repository.

## Project structure

```text
src/
  components/  Reusable page elements
  data/        Typed portfolio content
  test/        Test setup
  App.tsx      Page composition
  styles.css   Design system and responsive styles
public/        Static identity placeholders
.github/       CI validation
docs/          Architecture decisions
```
