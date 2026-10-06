import { SectionHeading } from './SectionHeading'

const identities = [
  { name: 'JUROL', src: '/jurol-logo.svg', width: 337, height: 337, mark: true },
  {
    name: 'Tellworks Logistics',
    src: '/images/professional-journey/tellworks-logistics.svg',
    width: 200,
    height: 52,
  },
  {
    name: 'AIMS+',
    src: '/images/professional-journey/aimsplus.svg',
    width: 274,
    height: 70,
  },
  {
    name: 'CoDev',
    src: '/images/professional-journey/codev.svg',
    width: 430,
    height: 106,
  },
  {
    name: 'NEC',
    src: '/images/professional-journey/nec.svg',
    width: 903,
    height: 71,
  },
  {
    name: 'Hadean Supercomputing Ltd',
    src: '/images/professional-journey/hadean.svg',
    width: 424,
    height: 119.1,
    darkLogoCanvas: true,
  },
]

export function ProfessionalJourney() {
  return (
    <section
      className="section professional-journey-section"
      id="professional-journey"
      aria-labelledby="professional-journey-heading"
    >
      <div className="container">
        <SectionHeading
          id="professional-journey-heading"
          index="04"
          label="PROFESSIONAL JOURNEY"
          title="Professional Journey"
          description="Selected companies and products I've worked with throughout my career."
        />
        <ul className="professional-journey-grid">
          {identities.map((identity) => (
            <li className="professional-journey-card" key={identity.name}>
              <div
                className={`professional-journey-logo-canvas${
                  identity.darkLogoCanvas ? ' professional-journey-logo-canvas-dark' : ''
                }`}
              >
                <img
                  className={
                    identity.mark
                      ? 'professional-journey-logo professional-journey-logo-jurol'
                      : 'professional-journey-logo'
                  }
                  src={identity.src}
                  alt={identity.name}
                  width={identity.width}
                  height={identity.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
