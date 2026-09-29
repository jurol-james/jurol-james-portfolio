import { Header } from './components/Header'
import { SectionHeading } from './components/SectionHeading'
import { ExperienceCard } from './components/ExperienceCard'
import { ProjectCard } from './components/ProjectCard'
import { ContactIcon } from './components/ContactIcon'
import { profile } from './data/profile'
import { focusAreas, interests, skillGroups } from './data/skills'
import { earlierCareer, experience } from './data/experience'
import { projects } from './data/projects'
import { certifications } from './data/certifications'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="eyebrow-line" />
                {profile.eyebrow}
              </p>
              <h1 id="hero-title">
                {profile.headline.lead} <em>{profile.headline.emphasis}</em>{' '}
                {profile.headline.close}
              </h1>
              <p className="hero-intro">{profile.introduction}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">
                  Explore my work <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#contact">
                  Get in touch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-aside" role="group" aria-label="Professional overview">
              <div className="hero-aside-top">
                <span>ENGINEERING SNAPSHOT</span>
                <span>01 / 03</span>
              </div>
              <div className="hero-aside-main">
                <strong>
                  10<span>+</span>
                </strong>
                <span>
                  years building
                  <br />
                  enterprise software
                </span>
              </div>
              <div className="hero-aside-bottom">
                <div>
                  <span>CORE</span>
                  <strong>Java / Spring Boot</strong>
                </div>
                <div>
                  <span>ALSO</span>
                  <strong>React / TypeScript</strong>
                </div>
                <div>
                  <span>FOCUS</span>
                  <strong>Logistics & integrations</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="container hero-footnote">
            <span>BACKEND DEPTH. FULL-STACK RANGE. TECHNICAL OWNERSHIP.</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="container">
            <SectionHeading
              id="about-heading"
              index="01"
              label="ABOUT ME"
              title="A practical engineer with a systems view."
            />
            <div className="about-grid">
              <p className="about-lead">
                I connect the details of implementation with the bigger decisions that make software
                last.
              </p>
              <img
                className="about-portrait"
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width={profile.portrait.width}
                height={profile.portrait.height}
                loading="lazy"
                decoding="async"
              />
              <div className="about-copy">
                <p>{profile.about}</p>
                <p>{profile.aboutLeadership}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="expertise" aria-labelledby="focus-heading">
          <div className="container">
            <SectionHeading
              id="focus-heading"
              index="02"
              label="WHAT I DO"
              title="Engineering focus"
              description="The work I bring together across backend, frontend, and technical direction."
            />
            <div className="focus-grid">
              {focusAreas.map((area) => (
                <article className="focus-card" key={area.number}>
                  <span className="focus-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="focus-rule" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="container">
            <SectionHeading
              id="skills-heading"
              index="03"
              label="CAPABILITIES"
              title="A focused technical toolkit"
              description="Strongest where Java services, modern interfaces, data, and integrations meet."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p className="skill-lead">{group.lead}</p>
                  <p className="skill-supporting">{group.supporting.join(' · ')}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
          aria-labelledby="experience-heading"
        >
          <div className="container">
            <SectionHeading
              id="experience-heading"
              index="04"
              label="EXPERIENCE"
              title="Experience in context"
              description="Selected work and responsibilities, with an emphasis on recent logistics systems."
            />
            <div className="experience-list">
              {experience.map((item) => (
                <ExperienceCard item={item} key={item.company} />
              ))}
            </div>
            <div className="earlier-career">
              <div>
                <span className="eyebrow">EARLIER CAREER</span>
                <p>Foundations in application development</p>
              </div>
              <ul>
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
            </div>
          </div>
        </section>

        <section
          className="section certifications-section"
          id="certifications"
          aria-labelledby="certifications-heading"
        >
          <div className="container">
            <SectionHeading
              id="certifications-heading"
              index="05"
              label="CREDENTIALS"
              title="Certifications"
            />
            <ul className="certification-list">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  <span>{certification.year}</span>
                  <strong>{certification.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="section projects-section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <SectionHeading
              id="projects-heading"
              index="06"
              label="PERSONAL WORK"
              title="Selected projects"
              description="A space for focused experiments and independent engineering work."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.name} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="section interests-section"
          id="interests"
          aria-labelledby="interests-heading"
        >
          <div className="container interests-grid">
            <div>
              <div className="section-kicker">
                <span>07</span>
                <span>LOOKING AHEAD</span>
              </div>
              <h2 id="interests-heading">What keeps me curious.</h2>
              <p>Areas I work in, study, and keep exploring as software systems evolve.</p>
            </div>
            <ul>
              {interests.map((interest) => (
                <li key={interest}>
                  {interest}
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">08 / CONTACT</p>
              <h2 id="contact-heading">Let’s talk about building something that works.</h2>
              <p>
                Open to conversations about senior engineering, technical leadership, and
                architecture work.
              </p>
            </div>
            <div className="contact-links" role="group" aria-label="Contact methods">
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
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="footer-socials">
            {profile.contact.links
              .filter((link) => link.url && !link.download)
              .map((link) => (
                <a
                  href={link.url}
                  key={link.label}
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            <a href={profile.blog.url}>{profile.blog.label}</a>
          </div>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
