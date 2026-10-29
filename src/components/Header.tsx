import { useEffect, useRef, useState, type MouseEvent } from 'react'
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
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButton.current?.focus()
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    const href = event.currentTarget.getAttribute('href')
    setMenuOpen(false)

    if (!href?.startsWith('#')) return
    const target = document.querySelector<HTMLElement>(href)
    if (!target) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return

    event.preventDefault()
    history.pushState(null, '', href)
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    target.scrollIntoView?.({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    target.focus({ preventScroll: true })
  }

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
            <a href={item.href} key={item.href} onClick={navigate}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-controls">
          <ThemeToggle />
          <a
            className="cv-button"
            href={profile.contact.links.find((link) => link.download)?.url}
            download
          >
            Download CV
          </a>
          <button
            ref={menuButton}
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
