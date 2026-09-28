# Jurol James Cabaluna — Engineering Portfolio

A static portfolio for Jurol James R. Cabaluna, a senior software engineer specializing in Java and Spring Boot. It presents full-stack delivery, technical leadership, and enterprise integration work, with recent warehouse and logistics experience prominent but concise.

## Stack

React, TypeScript, Vite, and plain CSS. Vitest and React Testing Library cover the important rendering and navigation behavior. GitHub Actions runs validation on pushes and pull requests.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

The theme toggle saves an explicit light or dark choice in browser storage. Until a choice is made, the site follows the operating system theme.

## Validation and build

```bash
npm run lint
npm run typecheck
npm test
npm run format
npm run format:check
npm run build
npm run preview
```

The production output is in `dist/`.

## Local Git repository

This workspace supplies a read-only `.git` mount, so repository metadata lives in `.git-local/`. Use `./scripts/git-local` in place of `git` for this checkout, for example `./scripts/git-local status` or `./scripts/git-local log --oneline`. The metadata directory is ignored by Git. In a normal clone, standard `git` commands work as usual.

## Update the content

- `src/data/profile.ts`: name, positioning, introduction, email, social links, and CV download path.
- `public/images/profile/jurol-james-profile.webp`: optimized portrait used in the About section.
- `src/data/experience.ts`: work history and selected responsibilities. Review all public descriptions with your employer/client confidentiality obligations in mind.
- `src/data/skills.ts`: engineering focus, grouped capabilities, and interests.
- `src/data/projects.ts`: personal work. Add projects as typed objects; only verified URLs become links.
- `public/cv/Jurol-James-Cabaluna-CV.pdf`: public CV download. Replace this file when the CV is updated, preserving the URL if possible.
- `index.html`: page title, meta description, canonical URL, and Open Graph text. Add an absolute `og:image` URL if you want dedicated social preview artwork.

The public project card intentionally has no GitHub link because its repository is private.

## Deployment

The app is a static Vite frontend deployed from this repository through the separate `jurol-james-portfolio` Vercel project. The project uses the Vite preset, `npm run build`, and `dist/` output. The canonical URL is `https://jurolc.com/`; the `www` host redirects there. No application server or runtime secrets are required. Vercel project links and authentication files remain local and ignored by Git.

## Project structure

```text
src/
  components/  Reusable page elements
  data/        Typed portfolio content
  test/        Test setup
  App.tsx      Page composition
  styles.css   Design system and responsive styles
public/        Favicon, social artwork, and public CV
.github/       CI validation
docs/          Architecture decisions
```
