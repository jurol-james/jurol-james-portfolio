import type { Experience } from './types'

export const experience: Experience[] = [
  {
    company: 'CoDev',
    role: 'Senior Java Developer',
    period: 'Jul 2022 — Present',
    context: 'Warehouse & logistics · Enterprise applications',
    summary:
      'Designing and delivering services, integrations, data workflows, and web features for warehouse and logistics applications, with responsibility for assigned modules and technical direction.',
    highlights: [
      'Lead design and delivery for assigned modules, evaluating implementation approaches across backend, frontend, database, and integration layers.',
      'Build Java and Spring Boot services, REST APIs, React and TypeScript features, and PostgreSQL data access for logistics workflows.',
      'Led work to move selected data integrations from ETL-based processing toward event-driven flows using Azure Service Bus queues.',
      'Review code, troubleshoot complex issues, and improve application performance and maintainability.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Azure',
      'Docker',
      'REST APIs',
      'OpenFeign',
      'Azure Service Bus',
    ],
    engagements: [
      {
        name: 'Tellworks · AIMSPlus+',
        period: 'Jul 2022 — Present',
        description:
          'Warehouse and order management spanning forward and reverse logistics, inventory, SKU and material management, fulfillment, scheduling, and external integrations.',
      },
      {
        name: 'Enterprise licensing portal',
        period: 'Jul 2022 — Apr 2023',
        description:
          'Served as primary backend developer for services and REST APIs supporting user and software license management.',
      },
    ],
  },
  {
    company: 'NEC Telecomm Software Philippines, Inc.',
    role: 'Software Senior Engineer',
    period: 'Feb 2018 — Jul 2022',
    context: 'IoT monitoring · Smart factory systems',
    summary:
      'Led and built full-stack monitoring and material management applications, combining technical coordination with hands-on engineering.',
    highlights: [
      'Led an eight-person development team on IaMS from requirements and technical design through implementation, testing, and delivery.',
      'Built full-stack IoT monitoring and visualization features for data from connected devices and integrated systems.',
      'Contributed to technical design, process improvements, troubleshooting, and code reviews across project work.',
    ],
    technologies: [
      'Java',
      'JavaScript',
      'TypeScript',
      'Angular',
      'React',
      'mBaaS Cloud Functions',
      'jQuery',
      'MongoDB',
      'Leaflet',
      'Turf.js',
    ],
    engagements: [
      {
        name: 'IaMS',
        period: 'Mar 2019 — Jul 2022',
        description:
          'Inspection and Monitoring System for collecting, processing, and visualizing data from connected devices and multiple integrated solutions, including map-based visualization and geospatial processing with Leaflet and Turf.js.',
      },
      {
        name: 'Material Management System (MMS)',
        period: 'Approx. Sep 2017 — Feb 2019',
        description:
          'As Software Design Engineer, built smart-factory material tracking for an Okiba storage area, including pallet movement, location visibility, inventory monitoring, and traceability. Work began during an earlier NEC deployment.',
      },
    ],
  },
]

export const earlierCareer = [
  {
    role: 'Software Engineer',
    company: 'I-Resource Consulting',
    period: 'Sep 2017 — Feb 2018',
    note: 'Deployed at NEC before direct employment.',
  },
  {
    role: 'Junior Software Developer',
    company: 'Spingine Corporation',
    period: 'Jan 2017 — Mar 2017',
  },
  { role: 'Software Engineer', company: 'Geckotech Solutions', period: 'Jan 2016 — Dec 2017' },
]
