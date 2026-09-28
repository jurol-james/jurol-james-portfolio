import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from './ThemeToggle'

const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8')
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1]

function initializeTheme() {
  if (!bootstrap) throw new Error('Theme bootstrap script is missing')
  new Function(bootstrap)()
}

describe('theme preference', () => {
  let systemDark = false
  let onSystemChange: (() => void) | undefined

  beforeEach(() => {
    localStorage.clear()
    document.documentElement.dataset.theme = 'light'
    document.head.innerHTML = '<meta name="theme-color" content="#17301C">'
    systemDark = false
    onSystemChange = undefined
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        get matches() {
          return systemDark
        },
        addEventListener: (_event: string, listener: () => void) => {
          onSystemChange = listener
        },
        removeEventListener: vi.fn(),
      })),
    )
  })

  it('uses the system preference when no explicit choice is stored', () => {
    systemDark = true
    initializeTheme()

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#171D19')
  })

  it('restores a saved choice ahead of the system preference', () => {
    systemDark = true
    localStorage.setItem('portfolio-theme', 'light')
    initializeTheme()
    render(<ThemeToggle />)

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument()
  })

  it('toggles and persists an explicit choice', async () => {
    const user = userEvent.setup()
    initializeTheme()
    render(<ThemeToggle />)

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('portfolio-theme')).toBe('dark')
    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute('content', '#171D19')
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })

  it('follows system changes until the user makes a choice', async () => {
    const user = userEvent.setup()
    initializeTheme()
    render(<ThemeToggle />)

    systemDark = true
    act(() => onSystemChange?.())
    expect(document.documentElement.dataset.theme).toBe('dark')

    await user.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    systemDark = false
    act(() => onSystemChange?.())
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})
