import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const storageKey = 'portfolio-theme'

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#171D19' : '#17301C')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)

  useEffect(() => {
    if (!window.matchMedia) return
    const preference = window.matchMedia('(prefers-color-scheme: dark)')
    const updateFromSystem = () => {
      try {
        if (localStorage.getItem(storageKey)) return
      } catch {
        // System preference still works when storage is unavailable.
      }
      const next = preference.matches ? 'dark' : 'light'
      applyTheme(next)
      setTheme(next)
    }

    preference.addEventListener('change', updateFromSystem)
    return () => preference.removeEventListener('change', updateFromSystem)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      // The control still works when storage is unavailable.
    }
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <path d="M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8 8.5 8.5 0 1 0 20.2 15.6Z" />
        </svg>
      )}
    </button>
  )
}
