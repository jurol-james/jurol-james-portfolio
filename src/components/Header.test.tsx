import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('responsive primary navigation', () => {
  it('closes the menu with Escape and returns focus to its control', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: 'Menu' })

    await user.click(menuButton)
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true')

    await user.keyboard('{Escape}')

    const closedButton = screen.getByRole('button', { name: 'Menu' })
    expect(closedButton).toHaveAttribute('aria-expanded', 'false')
    expect(closedButton).toHaveFocus()
  })

  it('moves focus to the destination after an internal navigation choice', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Header />
        <section id="experience" tabIndex={-1} aria-label="Experience" />
      </>,
    )
    await user.click(screen.getByRole('button', { name: 'Menu' }))
    await user.click(screen.getByRole('link', { name: 'Experience' }))

    expect(document.getElementById('experience')).toHaveFocus()
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  })
})
