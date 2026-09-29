import type { Project } from '../data/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span>{project.category}</span>
        <span className="status-pill">{project.status}</span>
      </div>
      <div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-details">
        <p>
          <strong>Role</strong> {project.role}
        </p>
        {project.architectureNote && (
          <p>
            <strong>Note</strong> {project.architectureNote}
          </p>
        )}
        <p className="project-tech">{project.technologies.join(' · ')}</p>
      </div>
      {(project.githubUrl || project.demoUrl || project.mavenCentralUrl) && (
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live demo <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.mavenCentralUrl && (
            <a
              href={project.mavenCentralUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on Maven Central`}
            >
              Maven Central <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </article>
  )
}
