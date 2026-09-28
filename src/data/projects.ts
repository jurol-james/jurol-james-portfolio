import type { Project } from './types'

export const projects: Project[] = [
  {
    name: 'Zerp Quantum Crypto',
    category: 'Personal experiment',
    status: 'Experimental',
    description:
      'A Java library exploring hybrid post-quantum encryption and agentic software development. This is technical exploration, not production cryptographic infrastructure.',
    role: 'Design and implementation',
    technologies: [
      'Java 21',
      'ML-KEM-768',
      'AES-256-GCM',
      'HKDF-SHA-256',
      'Bouncy Castle',
      'Gradle',
      'GitHub Actions',
    ],
    architectureNote: 'Includes automated interoperability testing.',
    // TODO: Add a verified public repository URL if available.
  },
]
