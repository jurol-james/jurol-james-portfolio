import type { Link } from './types'

export const profile = {
  // TODO: Replace before publishing under your name.
  name: 'Your Name',
  initials: 'YN',
  eyebrow: 'Senior Software Engineer · Technical Lead',
  headline: {
    lead: 'I build',
    emphasis: 'reliable software',
    close: 'for complex operations.',
  },
  introduction:
    'More than 10 years in software development, with deep Java and Spring Boot expertise and hands-on full-stack experience. I work across system design, delivery, and technical leadership—especially where applications, data, and real-world operations meet.',
  about:
    'My work spans enterprise applications, warehouse and logistics systems, integrations, and data workflows. I enjoy turning ambiguous requirements into maintainable software, helping teams make sound technical decisions, and staying close enough to the code to solve difficult problems.',
  contact: {
    // TODO: Add verified public links and an email address. Missing values render as placeholders, never fake links.
    email: undefined as string | undefined,
    links: [
      { label: 'GitHub' },
      { label: 'LinkedIn' },
      { label: 'Download CV' },
    ] as Link[],
  },
}
