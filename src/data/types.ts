export interface Link {
  label: string
  url?: string // TODO: Set only to a verified public URL.
}

export interface Experience {
  company: string
  role: string
  period: string
  context: string
  summary: string
  highlights: string[]
  technologies: string[]
  engagements?: {
    name: string
    period?: string
    description: string
  }[]
}

export interface Project {
  name: string
  category: string
  status: string
  description: string
  role: string
  technologies: string[]
  architectureNote?: string
  githubUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  title: string
  lead: string
  supporting: string[]
}
