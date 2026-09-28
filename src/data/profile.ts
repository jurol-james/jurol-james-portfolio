import type { Link } from './types'

export const profile = {
  name: 'Jurol James R. Cabaluna',
  initials: 'JC',
  eyebrow: 'Senior Software Engineer · Technical Lead',
  headline: {
    lead: 'I build',
    emphasis: 'reliable software',
    close: 'for complex operations.',
  },
  introduction:
    'More than 10 years building enterprise software, with Java and Spring Boot at the core of my work. I bring backend depth, React and TypeScript delivery, and hands-on technical leadership to systems that connect people, data, and operations.',
  about:
    'I design and build enterprise applications across ERP, warehouse and logistics, IoT monitoring, and system integration. My work spans backend services, data models, APIs, and user interfaces. I enjoy solving complex application problems while helping teams choose approaches they can maintain.',
  aboutLeadership:
    'In recent projects I have led assigned modules and integration initiatives, contributed to architecture and implementation decisions, reviewed code, and helped coordinate delivery. I have also led a development team on an IoT monitoring platform.',
  contact: {
    email: 'greenmachinedisposer@gmail.com',
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/jurol-james',
        ariaLabel: 'Visit Jurol James Cabaluna on GitHub',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jurol/',
        ariaLabel: 'Visit Jurol James Cabaluna on LinkedIn',
      },
      {
        label: 'Download CV',
        url: '/cv/Jurol-James-Cabaluna-CV.pdf',
        ariaLabel: 'Download Jurol James Cabaluna CV as PDF',
        download: true,
      },
    ] as Link[],
  },
}
