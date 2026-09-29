import { useState } from 'react'
import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: profile.blog.label, href: profile.blog.url },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Jurol James portfolio home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/favicon.svg" alt="" />
          </span>
          <span className="brand-name">
            {profile.name}
            <small>Engineering portfolio</small>
          </span>
        </a>
        <nav
          id="primary-navigation"
          className={menuOpen ? 'navigation is-open' : 'navigation'}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
