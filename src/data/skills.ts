import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend engineering',
    lead: 'Java · Spring Boot · REST APIs',
    supporting: ['Java 8 / 11 / 21', 'Spring Security', 'Spring Data JPA / Hibernate', 'OpenFeign', 'Quartz', 'AOP', 'JWT / OAuth', 'Node.js / Express'],
  },
  {
    title: 'Frontend delivery',
    lead: 'React · TypeScript · Material UI',
    supporting: ['JavaScript', 'HTML / CSS', 'Angular', 'Vue'],
  },
  {
    title: 'Data engineering',
    lead: 'PostgreSQL · SQL · Data ingestion',
    supporting: ['SQL Server / Azure SQL', 'Dremio', 'ETL integrations', 'Database design'],
  },
  {
    title: 'Cloud & delivery',
    lead: 'Azure · Docker · CI/CD',
    supporting: ['Azure App Services', 'Azure Database for PostgreSQL', 'Azure DevOps', 'GitHub Actions', 'Git'],
  },
  {
    title: 'Architecture & integration',
    lead: 'System design · API design · Integrations',
    supporting: ['Microservices', 'Event-driven systems', 'Azure Service Bus', 'Authentication & authorization', 'WMS integration', 'IoT data visualization'],
  },
  {
    title: 'Engineering practice',
    lead: 'Technical design · Code review · Troubleshooting',
    supporting: ['Testcontainers', 'Application Insights', 'Postman', 'DBeaver', 'Uptime Kuma'],
  },
]

export const focusAreas = [
  {
    number: '01',
    title: 'Systems that support operations',
    description: 'Building and evolving applications for warehouse, inventory, order, and material workflows where reliability and clarity matter.',
  },
  {
    number: '02',
    title: 'Architecture through delivery',
    description: 'Shaping module boundaries, APIs, data models, and implementation strategy while staying involved in the code and reviews.',
  },
  {
    number: '03',
    title: 'Full-stack problem solving',
    description: 'Connecting Java services, integrations, and data with usable React and TypeScript interfaces to deliver complete features.',
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
