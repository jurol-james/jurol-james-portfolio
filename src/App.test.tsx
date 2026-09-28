import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('presents the key professional context and keeps experimental work clearly labeled', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('reliable software')
    expect(screen.getByText('CoDev')).toBeInTheDocument()
    expect(screen.getByText('Tellworks · AIMSPlus+')).toBeInTheDocument()
    expect(screen.getByText('NEC Telecomm Software Philippines, Inc.')).toBeInTheDocument()
    expect(screen.getByText(/led an eight-person development team/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Zerp Quantum Crypto' })).toBeInTheDocument()
    expect(screen.getByText(/not production cryptographic infrastructure/i)).toBeInTheDocument()
  })

  it('opens mobile navigation and closes it after choosing a section', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = screen.getByRole('button', { name: 'Menu' })

    expect(menu).toHaveAttribute('aria-expanded', 'false')
    await user.click(menu)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'Experience' }))
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
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
})
