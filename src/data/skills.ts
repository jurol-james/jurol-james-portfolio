import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend engineering',
    lead: 'Java · Spring Boot · REST APIs',
    supporting: [
      'Java 8 / 11 / 21',
      'Spring Security',
      'Spring Data JPA / Hibernate',
      'OpenFeign',
      'JWT / OAuth',
      'Node.js / Express',
    ],
  },
  {
    title: 'Frontend delivery',
    lead: 'React · TypeScript · Material UI',
    supporting: ['JavaScript', 'HTML / CSS', 'Angular experience'],
  },
  {
    title: 'Geospatial Analysis',
    lead: 'Interactive mapping · spatial visualization',
    supporting: ['Leaflet', 'Turf.js'],
  },
  {
    title: 'Data engineering',
    lead: 'PostgreSQL · SQL · Data ingestion',
    supporting: [
      'SQL Server / Azure SQL',
      'MySQL / MariaDB',
      'MongoDB',
      'Dremio',
      'ETL integrations',
    ],
  },
  {
    title: 'Cloud & delivery',
    lead: 'Azure · Docker · CI/CD',
    supporting: [
      'Azure App Services',
      'Azure DevOps',
      'GitHub Actions',
      'AWS experience',
      'Jenkins',
    ],
  },
  {
    title: 'Identity & Security',
    lead: 'Keycloak · Microsoft Entra ID · SSO',
    supporting: ['OAuth 2.0', 'OpenID Connect (OIDC)', 'JWT', 'Authentication & authorization'],
  },
  {
    title: 'Architecture & integration',
    lead: 'System design · API design · Integrations',
    supporting: [
      'Microservices',
      'Event-driven systems',
      'Azure Service Bus',
      'SSO / identity provider integration',
      'WMS integration',
      'IoT data visualization',
    ],
  },
  {
    title: 'Engineering practice',
    lead: 'Agile · Scrum · Test-Driven Development (TDD)',
    supporting: ['Technical design', 'Code review', 'Testing', 'Troubleshooting', 'Waterfall'],
  },
]

export const focusAreas = [
  {
    number: '01',
    title: 'Systems that support operations',
    description:
      'Building applications for warehouse, order, inventory, and material workflows, with integrations that keep operational data moving.',
  },
  {
    number: '02',
    title: 'Architecture through delivery',
    description:
      'Guiding assigned modules and initiatives through technical design, implementation choices, code review, and delivery.',
  },
  {
    number: '03',
    title: 'Full-stack problem solving',
    description:
      'Connecting Java services, integrations, and data with usable React and TypeScript interfaces to deliver complete features.',
  },
]

export const interests = [
  'Distributed systems',
  'API & integration architecture',
  'Warehouse & logistics platforms',
  'Event-driven systems',
  'Developer tooling',
  'Platform engineering',
  'Post-quantum cryptography exploration',
  'AI-assisted software development',
]
