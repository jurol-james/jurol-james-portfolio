import type { Experience } from './types'

export const experience: Experience[] = [
  {
    company: 'CoDev',
    role: 'Senior Java Developer / Senior Software Engineer',
    period: 'Jul 2022 — Present',
    context: 'Tellworks · AIMSPlus+ / Order Management System',
    summary: 'Engineering warehouse and logistics software across forward and reverse logistics, inventory, SKU and material management, order workflows, and data ingestion.',
    highlights: [
      'Own modules and deliver features across backend services and React interfaces.',
      'Contribute to technical design, API and integration design, database design, and architectural decisions.',
      'Review code, troubleshoot production issues, improve performance, and coordinate implementation across components.',
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'React', 'TypeScript', 'PostgreSQL', 'Azure', 'Docker', 'REST APIs', 'OpenFeign', 'Azure Service Bus'],
  },
  {
    company: 'NEC',
    role: 'Software Senior Engineer',
    period: 'Feb 2018 — Jul 2022',
    context: 'Enterprise applications · Manufacturing systems',
    summary: 'Full-stack engineering and technical coordination across enterprise and smart-factory applications.',
    highlights: [
      'Took project leader responsibilities on IaMS, coordinating application development in a team of approximately eight.',
      'Designed and built application features spanning Java services and modern web frontends.',
      'Contributed requirements analysis, implementation, testing, troubleshooting, and code reviews for material management workflows.',
    ],
    technologies: ['Java', 'Angular', 'React', 'TypeScript', 'JavaScript', 'Vue', 'Node.js / Express', 'mBaaS'],
    engagements: [
      {
        name: 'IaMS',
        description: 'Project leadership, technical coordination, and full-stack application development with a team of approximately eight.',
      },
      {
        name: 'Material Management System (MMS)',
        // TODO: Confirm how this project period relates to the NEC employment start date.
        period: 'Approx. Sep 2017 — Feb 2019',
        description: 'Smart-factory material management for an Okiba storage area: pallet movement, inventory and location visibility, movement history, and traceability. Team of approximately six.',
      },
    ],
  },
]
