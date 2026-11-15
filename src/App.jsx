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

function PortfolioShell() {
  const [indexOpen, setIndexOpen] = useState(false)
  const [quietMode, setQuietMode] = useState(false)
  const [darkMode, setDarkMode] = useState(initialDarkMode)
  const indexButtonRef = useRef(null)
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
  }, [location.pathname, quietMode])

  const jumpTo = (path) => {
    setIndexOpen(false)
    navigate(path)
  }

  return <div className={`app-shell ${quietMode ? 'quiet-mode' : ''} ${darkMode ? 'theme-dark' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <aside className="site-rail" aria-label="Primary navigation">
      <Link className="brand-mark" to="/" aria-label="Back to start"><span>{profile.initials}</span><small>PORTFOLIO<br />/ 2026</small></Link>
      <nav className="rail-nav">{sections.map((section) => <NavLink key={section.id} to={section.path} end={section.path === '/'} className={section.id === activeSection ? 'active' : ''} aria-current={section.id === activeSection ? 'page' : undefined}><span>{section.index}</span>{section.label}</NavLink>)}</nav>
      <div className="rail-bottom"><span className="status-dot" /> OPEN TO INTERNSHIPS</div>
    </aside>

    <div className="content-column" id="main-content">
      <header className="topbar"><span>{profile.shortName.toUpperCase()} / DIGITAL WORKBENCH</span><div><button className="theme-toggle" onClick={() => setDarkMode((mode) => !mode)} aria-pressed={darkMode}>{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</button><button className="quiet-toggle" onClick={() => setQuietMode((mode) => !mode)} aria-pressed={quietMode}>{quietMode ? 'MOTION: LOW' : 'MOTION: ON'}</button><button ref={indexButtonRef} className="index-button" onClick={() => setIndexOpen(true)}><span>QUICK INDEX</span><kbd>CTRL K</kbd></button></div></header>
      <main><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/work" element={<WorkPage />} /><Route path="/stack" element={<StackPage />} /><Route path="/contact" element={<ContactPage />} /><Route path="*" element={<NotFoundPage />} /></Routes></main>
      <footer className="site-footer"><span>BUILT WITH INTENTION / REACT + EXPRESS + POSTGRESQL</span><span>© 2026 {profile.shortName.toUpperCase()}</span></footer>
    </div>

    {indexOpen && <QuickIndex sections={sections} onJump={jumpTo} onClose={() => setIndexOpen(false)} />}
  </div>
}

function App() {
  return <BrowserRouter><PortfolioShell /></BrowserRouter>
}

export default App
