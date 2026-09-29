import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('uses the Jurol mark as the accessible portfolio home identity', () => {
    render(<App />)

    const home = screen.getByRole('link', { name: 'Jurol James portfolio home' })
    expect(home.querySelector('.brand-mark')).toHaveAttribute('aria-hidden', 'true')
    expect(home.querySelector('.brand-mark img')).toHaveAttribute('src', '/jurol-mark.png')
    expect(home.querySelector('.brand-mark img')).toHaveAttribute('alt', '')
    expect(home).toHaveTextContent('Jurol James')
  })

  it('presents the key professional context and keeps experimental work clearly labeled', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('reliable software')
    expect(screen.getByText('CoDev')).toBeInTheDocument()
    expect(screen.getByText('Tellworks · AIMSPlus+')).toBeInTheDocument()
    expect(screen.getByText('NEC Telecomm Software Philippines, Inc.')).toBeInTheDocument()
    expect(screen.getByText(/led an eight-person development team/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portrait of Jurol James Cabaluna' })).toHaveAttribute(
      'src',
      '/images/profile/jurol-james-profile.webp',
    )
    expect(screen.getByRole('heading', { name: 'Zerp Quantum Crypto' })).toBeInTheDocument()
    expect(screen.getByText(/not production cryptographic infrastructure/i)).toBeInTheDocument()
    const mavenCentralLink = screen.getByRole('link', {
      name: 'View Zerp Quantum Crypto on Maven Central',
    })
    expect(mavenCentralLink).toHaveAttribute(
      'href',
      'https://central.sonatype.com/artifact/io.github.jurol-james/zerp-quantum-crypto',
    )
    expect(mavenCentralLink).toHaveAttribute('target', '_blank')
    expect(mavenCentralLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('opens mobile navigation and closes it after choosing a section', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = screen.getByRole('button', { name: 'Menu' })

    expect(menu).toHaveAttribute('aria-expanded', 'false')
    await user.click(menu)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
    expect(
      within(screen.getByRole('navigation', { name: 'Primary navigation' })).getByRole('link', {
        name: 'Blog',
      }),
    ).toHaveAttribute('href', 'https://blog.jurolc.com')
    await user.click(screen.getByRole('link', { name: 'Experience' }))
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('links to the blog from the primary navigation and footer in the same tab', () => {
    render(<App />)

    const navigationBlog = within(
      screen.getByRole('navigation', { name: 'Primary navigation' }),
    ).getByRole('link', { name: 'Blog' })
    const footerBlog = within(document.querySelector('footer')!).getByRole('link', { name: 'Blog' })

    for (const link of [navigationBlog, footerBlog]) {
      expect(link).toHaveAttribute('href', 'https://blog.jurolc.com')
      expect(link).not.toHaveAttribute('target')
    }
  })

  it('uses verified public contact details and a local CV download', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Email Jurol James R. Cabaluna' })).toHaveAttribute(
      'href',
      'mailto:greenmachinedisposer@gmail.com',
    )
    const githubLinks = screen.getAllByRole('link', {
      name: 'Visit Jurol James Cabaluna on GitHub',
    })
    const linkedinLinks = screen.getAllByRole('link', {
      name: 'Visit Jurol James Cabaluna on LinkedIn',
    })
    expect(githubLinks).toHaveLength(2)
    expect(linkedinLinks).toHaveLength(2)
    for (const link of githubLinks) {
      expect(link).toHaveAttribute('href', 'https://github.com/jurol-james')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
    for (const link of linkedinLinks) {
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/jurol/')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
    expect(
      screen.getByRole('link', { name: 'Download Jurol James Cabaluna CV as PDF' }),
    ).toHaveAttribute('href', '/cv/Jurol-James-Cabaluna-CV.pdf')
    expect(
      screen.getByRole('link', { name: 'Download Jurol James Cabaluna CV as PDF' }),
    ).toHaveAttribute('download')
    expect(
      screen.queryByRole('link', { name: /Zerp Quantum Crypto GitHub/i }),
    ).not.toBeInTheDocument()
  })

  it('keeps all internal navigation targets available', () => {
    const { container } = render(<App />)
    const internalLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('#'))

    for (const link of internalLinks) {
      const target = link.getAttribute('href')?.slice(1)
      expect(
        container.querySelector(`#${target}`),
        `Missing target for ${link.textContent}`,
      ).not.toBeNull()
    }
  })

  it('shows the corrected capabilities, NEC mapping work, and three certifications', () => {
    const { container } = render(<App />)
    const skills = container.querySelector<HTMLElement>('#skills')!
    const necExperience = container.querySelector<HTMLElement>('#experience')!
    const certifications = container.querySelector<HTMLElement>('#certifications')!

    expect(container).not.toHaveTextContent(/\bVue\b/i)
    expect(
      within(skills).getByText('JavaScript · HTML / CSS · Angular experience'),
    ).toBeInTheDocument()
    expect(within(skills).getByRole('heading', { name: 'Geospatial Analysis' })).toBeInTheDocument()
    expect(within(skills).getByText('Leaflet · Turf.js')).toBeInTheDocument()
    expect(within(skills).getByRole('heading', { name: 'Identity & Security' })).toBeInTheDocument()
    expect(within(skills).getByText('Keycloak · Microsoft Entra ID · SSO')).toBeInTheDocument()
    expect(
      within(skills).getByText(/OAuth 2\.0 · OpenID Connect \(OIDC\) · JWT/),
    ).toBeInTheDocument()
    expect(
      within(skills).getByRole('heading', { name: 'Engineering practice' }),
    ).toBeInTheDocument()
    expect(
      within(skills).getByText('Agile · Scrum · Test-Driven Development (TDD)'),
    ).toBeInTheDocument()
    expect(
      within(skills).getByText(
        'Technical design · Code review · Testing · Troubleshooting · Waterfall',
      ),
    ).toBeInTheDocument()
    expect(within(skills).queryByText(/Kubernetes/i)).not.toBeInTheDocument()
    expect(within(necExperience).getByText(/MongoDB/)).toBeInTheDocument()
    expect(
      within(necExperience).getByText(
        /map-based visualization and geospatial processing with Leaflet and Turf.js/,
      ),
    ).toBeInTheDocument()
    const earlierCareerCompanies = [...container.querySelectorAll('.earlier-career li span')].map(
      (company) => company.textContent,
    )
    expect(earlierCareerCompanies[1]).toContain('Spingine Corporation')
    expect(earlierCareerCompanies[2]).toContain('Geckotech Solutions')

    expect(within(certifications).getAllByRole('listitem')).toHaveLength(3)
    for (const [year, name] of [
      [2019, 'Linux Essentials Examination'],
      [2019, 'Philippine National IT Standard (PhilNITS) - Fundamental Engineering Examination'],
      [2025, 'Generative AI for Software Development'],
    ] as const) {
      expect(within(certifications).getByText(name).closest('li')).toHaveTextContent(String(year))
    }
  })

  it('keeps all four contact icons decorative beside visible labels', () => {
    const { container } = render(<App />)
    const contact = container.querySelector('.contact-links')!

    for (const name of ['email', 'github', 'linkedin', 'download']) {
      const icon = contact.querySelector(`.contact-icon-${name}`)
      expect(icon).not.toBeNull()
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
  })
})
