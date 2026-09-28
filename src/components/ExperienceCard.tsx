import type { Experience } from '../data/types'

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="experience-item">
      <div className="experience-meta">
        <span className="timeline-dot" aria-hidden="true" />
        <span className="experience-period">{item.period}</span>
        <strong>{item.company}</strong>
      </div>
      <div className="experience-content">
        <p className="eyebrow">{item.context}</p>
        <h3>{item.role}</h3>
        <p className="experience-summary">{item.summary}</p>
        <ul className="highlight-list">
          {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        {item.engagements && (
          <div className="engagements">
            {item.engagements.map((engagement) => (
              <div className="engagement" key={engagement.name}>
                <div className="engagement-title"><strong>{engagement.name}</strong>{engagement.period && <span>{engagement.period}</span>}</div>
                <p>{engagement.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="technology-line" aria-label="Technologies"><span>TOOLS & TECHNOLOGIES</span><p>{item.technologies.join(' · ')}</p></div>
      </div>
    </article>
  )
}
