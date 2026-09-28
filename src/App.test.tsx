import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('portfolio', () => {
  it('presents the key professional context and keeps experimental work clearly labeled', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('reliable software')
    expect(screen.getByText('CoDev')).toBeInTheDocument()
    expect(screen.getByText('Tellworks · AIMSPlus+ / Order Management System')).toBeInTheDocument()
    expect(screen.getByText('NEC')).toBeInTheDocument()
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

  it('does not render fabricated contact or project links', () => {
    render(<App />)

    expect(screen.getAllByText('Details to be added')).toHaveLength(4)
    expect(screen.queryByRole('link', { name: /github|linkedin|download cv|email/i })).not.toBeInTheDocument()
  })

  it('keeps all internal navigation targets available', () => {
    const { container } = render(<App />)
    const internalLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('#'))

    for (const link of internalLinks) {
      const target = link.getAttribute('href')?.slice(1)
      expect(container.querySelector(`#${target}`), `Missing target for ${link.textContent}`).not.toBeNull()
    }
  })
})
