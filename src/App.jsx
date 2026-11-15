import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { QuickIndex } from './components/QuickIndex'
import { sections } from './data/portfolio'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { StackPage } from './pages/StackPage'
import { WorkPage } from './pages/WorkPage'
import { profile } from './data/portfolio'

function initialDarkMode() {
  const saved = window.localStorage.getItem('portfolio-theme')
  return saved ? saved === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

function ThemeIcon({ darkMode }) {
  return darkMode ? <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg> : <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" /></svg>
}

function IndexIcon() {
  return <svg className="index-icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h.01M10 6h8M6 12h.01M10 12h8M6 18h.01M10 18h8" /></svg>
}

function PortfolioShell() {
  const [indexOpen, setIndexOpen] = useState(false)
  const [quietMode, setQuietMode] = useState(false)
  const [darkMode, setDarkMode] = useState(initialDarkMode)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const indexButtonRef = useRef(null)
  const mainRef = useRef(null)
  const wasIndexOpen = useRef(false)
  const location = useLocation()
  const navigate = useNavigate()
  const activeSection = sections.find((section) => section.path === location.pathname)?.id || 'top'

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIndexOpen((open) => !open)
      }
      if (event.key === 'Escape') setIndexOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    if (!indexOpen && wasIndexOpen.current) indexButtonRef.current?.focus()
    wasIndexOpen.current = indexOpen
  }, [indexOpen])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: quietMode || prefersReducedMotion ? 'auto' : 'smooth' })
    requestAnimationFrame(() => mainRef.current?.focus({ preventScroll: true }))
  }, [location.pathname, quietMode])

  useEffect(() => {
    const pageTitle = sections.find((section) => section.path === location.pathname)?.label || 'Page'
    document.title = `${pageTitle} — ${profile.shortName}`
  }, [location.pathname])

  const jumpTo = (path) => {
    setIndexOpen(false)
    setMobileNavOpen(false)
    navigate(path)
  }

  return <div className={`app-shell ${quietMode ? 'quiet-mode' : ''} ${darkMode ? 'theme-dark' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <aside className={`site-rail ${mobileNavOpen ? 'mobile-open' : ''}`} aria-label="Primary navigation">
      <Link className="brand-mark" to="/" onClick={() => setMobileNavOpen(false)} aria-label="Back to start"><span>{profile.initials}</span><small>Portfolio<br />/ 2026</small></Link>
      <nav className="rail-nav" id="primary-navigation">{sections.map((section) => <NavLink key={section.id} to={section.path} onClick={() => setMobileNavOpen(false)} end={section.path === '/'} className={section.id === activeSection ? 'active' : ''} aria-current={section.id === activeSection ? 'page' : undefined}><span>{section.index}</span>{section.label}</NavLink>)}</nav>
      <div className="rail-bottom"><span className="status-dot" aria-hidden="true" /> Open to internships</div>
    </aside>

    <div className="content-column">
      <header className="topbar"><span>{profile.shortName} / Digital workbench</span><div><button className="mobile-nav-toggle" onClick={() => setMobileNavOpen((open) => !open)} aria-expanded={mobileNavOpen} aria-controls="primary-navigation" aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}>{mobileNavOpen ? 'Close' : 'Menu'}</button><button className="theme-toggle" onClick={() => setDarkMode((mode) => !mode)} aria-pressed={darkMode} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`} title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}><ThemeIcon darkMode={darkMode} /></button><button className="quiet-toggle" onClick={() => setQuietMode((mode) => !mode)} aria-pressed={quietMode} aria-label={`${quietMode ? 'Enable' : 'Disable'} motion`}>{quietMode ? 'Motion: low' : 'Motion: on'}</button><button ref={indexButtonRef} className="index-button" onClick={() => setIndexOpen(true)} aria-label="Open quick index" title="Open quick index"><span className="index-label">Quick index</span><span className="index-icon" aria-hidden="true"><IndexIcon /></span><kbd>Ctrl K</kbd></button></div></header>
      <main ref={mainRef} id="main-content" tabIndex="-1"><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/work" element={<WorkPage />} /><Route path="/stack" element={<StackPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></main>
      <footer className="site-footer"><span>Built with React, Express, and Resend</span><span>© 2026 {profile.shortName}</span></footer>
    </div>

    {indexOpen && <QuickIndex sections={sections} onJump={jumpTo} onClose={() => setIndexOpen(false)} />}
  </div>
}

function App() {
  return <BrowserRouter><PortfolioShell /></BrowserRouter>
}

export default App
