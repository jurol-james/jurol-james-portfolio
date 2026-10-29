import { SpeedInsights } from '@vercel/speed-insights/react'
import { ContactIcon } from './components/ContactIcon'
import { ExperienceCard } from './components/ExperienceCard'
import { Header } from './components/Header'
import { HeroGeometry } from './components/HeroGeometry'
import { PersonCodePanel } from './components/PersonCodePanel'
import { ProfessionalJourney } from './components/ProfessionalJourney'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { certifications } from './data/certifications'
import { earlierCareer, experience } from './data/experience'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { interests, skillGroups } from './data/skills'

const featuredWork = [
  {
    company: 'CoDev · Tellworks · AIMSPlus+',
    domain: 'Warehouse / logistics',
    title: 'Making operational workflows work together.',
    summary: experience[0].engagements?.[0].description ?? experience[0].summary,
    scope:
      'Java and Spring Boot services, REST APIs, React and TypeScript features, PostgreSQL data access, and selected event-driven integration work.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Azure Service Bus'],
  },
  {
    company: 'NEC · IaMS · MMS',
    domain: 'IoT / smart factory',
    title: 'Monitoring signals, movement, and materials.',
    summary: experience[1].engagements?.[0].description ?? experience[1].summary,
    scope:
      'Full-stack implementation across connected-device data, integrated systems, and map-based visualization, with team leadership from requirements through delivery.',
    technologies: ['Java', 'React', 'TypeScript', 'MongoDB', 'Leaflet'],
  },
]

const blogArticles = [
  {
    title: 'Quantum Circuits and Interference',
    series: 'Quantum Computing Fundamentals · Part 4',
    href: 'https://blog.jurolc.com/posts/quantum-circuits-and-interference/',
  },
  {
    title: 'SLH-DSA: Understanding Hash-Based Signatures',
    series: 'Post-Quantum Cryptography · Part 5',
    href: 'https://blog.jurolc.com/posts/slh-dsa-hash-based-post-quantum-signatures/',
  },
]

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title" tabIndex={-1}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true" />
                {profile.eyebrow}
              </p>
              <h1 id="hero-title">
                I build <span>reliable software</span> for complex operations.
              </h1>
              <p className="intro">{profile.introduction}</p>
              <div className="roleline" aria-label="Engineering specialties">
                <span>Java / Spring Boot</span>
                <span>React / TypeScript</span>
                <span>Enterprise integrations</span>
              </div>
              <div className="actions">
                <a className="button" href="#work">
                  Explore selected work <span aria-hidden="true">↘</span>
                </a>
                <a className="text-link" href="#contact">
                  Contact <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-art-composition">
              <HeroGeometry />
              <PersonCodePanel />
              <span className="art-label">
                <b>ENGINEERING</b> · systems in motion
              </span>
            </div>
          </div>
          <div className="container hero-note">
            <span>BACKEND DEPTH · FULL-STACK RANGE · TECHNICAL OWNERSHIP</span>
            <span>10+ YEARS IN SOFTWARE ENGINEERING</span>
          </div>
        </section>

        <section
          className="section work-section"
          id="work"
          aria-labelledby="work-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="work-heading"
              index="01"
              label="SELECTED WORK"
              title="Engineering that meets the real world."
              description="Case studies built from verified experience, without fabricated product screenshots."
            />
            <div className="story-list">
              {featuredWork.map((story, index) => (
                <article className="story" key={story.company}>
                  <div className="story-art" aria-hidden="true">
                    <span className="story-glyph" data-index={index + 1} />
                    <span className="story-art-label">FIELD NOTE / 0{index + 1}</span>
                  </div>
                  <div className="story-copy">
                    <div className="story-meta">
                      <span className="meta">{story.company}</span>
                      <span className="meta">{story.domain}</span>
                    </div>
                    <h3>{story.title}</h3>
                    <p>{story.summary}</p>
                    <p className="responsibility">
                      <strong>Engineering scope:</strong> {story.scope}
                    </p>
                    <p className="stackline">{story.technologies.join(' · ')}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section expertise-section"
          id="expertise"
          aria-labelledby="expertise-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="expertise-heading"
              index="02"
              label="EXPERTISE"
              title="Connected skills, not isolated badges."
              description="Technical areas brought together in enterprise application work."
            />
            <div className="expertise-list" id="skills" tabIndex={-1}>
              {skillGroups.map((group, index) => (
                <article className="expertise-row" key={group.title}>
                  <span className="number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <div className="expertise-detail">
                    <p>{group.lead}</p>
                    <span className="examples">{group.supporting.join(' · ')}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section about-section"
          id="about"
          aria-labelledby="about-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="about-heading"
              index="03"
              label="ABOUT / APPROACH"
              title="Implementation details, with the whole system in view."
            />
            <div className="about-grid">
              <div className="about-profile">
                <img
                  className="about-portrait"
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  width={profile.portrait.width}
                  height={profile.portrait.height}
                  loading="lazy"
                  decoding="async"
                />
                <p className="about-statement">SENIOR SOFTWARE ENGINEER · TECHNICAL LEAD</p>
              </div>
              <div className="about-copy">
                <p>{profile.about}</p>
                <p>{profile.aboutLeadership}</p>
                <div className="interest-block" id="interests" tabIndex={-1}>
                  <h3>Areas I keep exploring</h3>
                  <p>{interests.join(' · ')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="experience-heading"
              index="04"
              label="EXPERIENCE"
              title="A decade of building across teams and domains."
              description="A concise chronology supports the featured engineering stories."
            />
            <div className="history">
              {experience.map((item) => (
                <article key={item.company}>
                  <span className="meta">{item.period}</span>
                  <h3>
                    {item.role} · {item.company}
                  </h3>
                  <p>{item.summary}</p>
                </article>
              ))}
              <article>
                <span className="meta">2016 — 2018</span>
                <h3>Earlier engineering roles</h3>
                <ul className="earlier-career">
                  {earlierCareer.map((item) => (
                    <li key={item.company}>
                      <strong>{item.role}</strong>
                      <span>
                        {item.company} · {item.period}
                      </span>
                      {item.note && <small>{item.note}</small>}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <details className="experience-details">
              <summary>View detailed responsibilities and technology context</summary>
              <div className="experience-list">
                {experience.map((item) => (
                  <ExperienceCard item={item} key={`${item.company}-detail`} />
                ))}
              </div>
            </details>
          </div>
        </section>

        <ProfessionalJourney />

        <section
          className="section independent-section"
          id="projects"
          aria-labelledby="projects-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="projects-heading"
              index="06"
              label="BEYOND THE DAY JOB"
              title="Independent work and technical writing."
              description="Exploration is clearly labeled; published writing links directly to Engineering Notes."
            />
            <div className="extra-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
              <article className="extra-card blog-card">
                <span className="meta">ENGINEERING NOTES · BLOG</span>
                <h3>Technical ideas, explained.</h3>
                <p>Selected writing on quantum computing and post-quantum cryptography.</p>
                <nav className="extra-links" aria-label="Featured Engineering Notes articles">
                  {blogArticles.map((article) => (
                    <a href={article.href} key={article.href}>
                      {article.title}
                      <span>{article.series}</span>
                    </a>
                  ))}
                </nav>
                <a className="browse-link" href="https://blog.jurolc.com/posts/">
                  Browse Engineering Notes <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section certifications-section"
          id="certifications"
          aria-labelledby="certifications-heading"
          tabIndex={-1}
        >
          <div className="container">
            <SectionHeading
              id="certifications-heading"
              index="07"
              label="CREDENTIALS"
              title="Selected certifications."
              description="A concise record of completed examinations and coursework."
            />
            <ul className="cert-list">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  <time dateTime={String(certification.year)}>{certification.year}</time>
                  <strong>{certification.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
          <div className="container contact-row">
            <div className="contact-copy">
              <p className="section-label">08 / CONTACT</p>
              <h2 id="contact-heading">Let’s talk about building software that lasts.</h2>
              <p>
                For conversations about senior engineering, technical leadership, and architecture
                work.
              </p>
              <img
                className="contact-brand-logo"
                src="/jurol-logo.svg"
                width="337"
                height="337"
                alt="JUROL — Greener Than Your Mind"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="contact-links" role="group" aria-label="Contact and profile links">
              <a href={`mailto:${profile.contact.email}`} aria-label={`Email ${profile.name}`}>
                <span className="contact-link-label">
                  <ContactIcon name="email" />
                  Email
                </span>
                <span className="contact-link-meta">{profile.contact.email} ↗</span>
              </a>
              {profile.contact.links.map((link) =>
                link.url ? (
                  <a
                    href={link.url}
                    key={link.label}
                    aria-label={link.ariaLabel}
                    target={link.download ? undefined : '_blank'}
                    rel={link.download ? undefined : 'noopener noreferrer'}
                    download={link.download ? '' : undefined}
                  >
                    <span className="contact-link-label">
                      <ContactIcon name={link.icon} />
                      {link.label}
                    </span>
                    <span className="contact-link-meta">{link.download ? 'PDF ↓' : 'Open ↗'}</span>
                  </a>
                ) : (
                  <div key={link.label}>
                    <span className="contact-link-label">
                      <ContactIcon name={link.icon} />
                      {link.label}
                    </span>
                    <span className="contact-link-meta">Details to be added</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Footer links">
          {profile.contact.links
            .filter((link) => link.url && !link.download)
            .map((link) => (
              <a
                href={link.url!}
                key={link.label}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          <a href={profile.blog.url}>{profile.blog.label}</a>
        </nav>
        <a href="#top">Back to top ↑</a>
      </footer>
      <SpeedInsights />
    </div>
  )
}

export default App
