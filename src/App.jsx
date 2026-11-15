import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { ContactForm } from './components/ContactForm'
import { ProjectCard, ProjectDetails } from './components/ProjectCard'
import { QuickIndex } from './components/QuickIndex'
import { profile, projects, sections, skills } from './data/portfolio'

function initialDarkMode() {
  const saved = window.localStorage.getItem('portfolio-theme')
  return saved ? saved === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [filter, setFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSkill, setActiveSkill] = useState('frontend')
  const [indexOpen, setIndexOpen] = useState(false)
  const [quietMode, setQuietMode] = useState(false)
  const [darkMode, setDarkMode] = useState(initialDarkMode)
  const indexButtonRef = useRef(null)
  const wasIndexOpen = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActiveSection(visible[0].target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .25, .5] })
    sections.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)))
    return () => observer.disconnect()
  }, [])

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

  const visibleProjects = useMemo(() => filter === 'ALL' ? projects : projects.filter((project) => project.type === filter), [filter])

  const jumpTo = (id) => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    document.getElementById(id)?.scrollIntoView({ behavior: quietMode || prefersReducedMotion ? 'auto' : 'smooth' })
    setIndexOpen(false)
  }

  const socialLink = (label, url) => url ? <a href={url} target="_blank" rel="noreferrer">{label}</a> : <span className="pending-social">{label} link pending</span>

  return <div className={`app-shell ${quietMode ? 'quiet-mode' : ''} ${darkMode ? 'theme-dark' : ''}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <aside className="site-rail" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Back to top"><span>{profile.initials}</span><small>PORTFOLIO<br />/ 2026</small></a>
      <nav className="rail-nav">{sections.map((section) => <button key={section.id} className={activeSection === section.id ? 'active' : ''} onClick={() => jumpTo(section.id)} aria-current={activeSection === section.id ? 'location' : undefined}><span>{section.index}</span>{section.label}</button>)}</nav>
      <div className="rail-bottom"><span className="status-dot" /> OPEN TO INTERNSHIPS</div>
    </aside>

    <div className="content-column" id="main-content">
      <header className="topbar"><span>{profile.shortName.toUpperCase()} / DIGITAL WORKBENCH</span><div><button className="theme-toggle" onClick={() => setDarkMode((mode) => !mode)} aria-pressed={darkMode}>{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</button><button className="quiet-toggle" onClick={() => setQuietMode((mode) => !mode)} aria-pressed={quietMode}>{quietMode ? 'MOTION: LOW' : 'MOTION: ON'}</button><button ref={indexButtonRef} className="index-button" onClick={() => setIndexOpen(true)}><span>QUICK INDEX</span><kbd>CTRL K</kbd></button></div></header>

      <main>
        <section className="hero-section section-pad" id="top">
          <div className="hero-copy-wrap"><p className="kicker">INFORMATION TECHNOLOGY STUDENT / INTERNSHIP SEEKER</p><h1>Interfaces for<br /><span>uncertain</span> moments.</h1><p className="hero-lede">I&apos;m {profile.name} — an Information Technology student building digital products that are easier to understand, easier to use, and harder to forget.</p><div className="hero-actions"><a className="primary-link" href="#work">View selected work <span>↘</span></a><button className="text-button" onClick={() => jumpTo('about')}>Read the short version <span>→</span></button></div></div>
          <div className="hero-map" aria-label="Interactive portrait card"><div className="map-label map-label-top">CURRENT POSITION <strong>01 / 04</strong></div><div className="photo-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="photo-card"><img src="/profile-photo.jpg" alt={`Portrait of ${profile.name}`} /><span className="photo-caption">PRINCE / IT STUDENT</span></div><span className="orbit-tag tag-a">REACT</span><span className="orbit-tag tag-b">EXPRESS</span><span className="orbit-tag tag-c">PG</span></div><div className="map-label map-label-bottom">A small system for making<br /><strong>useful things feel human.</strong></div></div>
        </section>

        <section className="about-section section-pad" id="about"><div className="section-index">01 - ABOUT</div><div className="about-grid"><h2>I care about the space between a person&apos;s intention and the interface that answers it.</h2><div className="about-notes"><p>{profile.bio}</p><div className="about-facts"><div><span>BASED IN</span><strong>{profile.location}</strong></div><div><span>STUDYING</span><strong>{profile.degree}</strong></div><div><span>EXPECTED</span><strong>Graduation {profile.graduation}</strong></div><div><span>TARGET ROLES</span><strong>{profile.roles}</strong></div><div><span>PREFERRED</span><strong>{profile.preferredLocation}</strong></div></div></div></div></section>

        <section className="work-section section-pad" id="work"><div className="section-heading-row"><div><div className="section-index">02 - SELECTED WORK</div><h2>Proof over promises.</h2></div><p>One deployed team project, with more case studies to come as I keep building.</p></div><div className="filter-bar" role="toolbar" aria-label="Filter projects">{['ALL', 'PRODUCT'].map((option) => <button key={option} className={filter === option ? 'active' : ''} onClick={() => setFilter(option)} aria-pressed={filter === option}>{option}<small>{option === 'ALL' ? projects.length : projects.filter((project) => project.type === option).length}</small></button>)}</div><div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedProject === project.id} onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)} />)}</div>{selectedProject && <ProjectDetails project={projects.find((project) => project.id === selectedProject)} onClose={() => setSelectedProject(null)} />}</section>

        <section className="stack-section section-pad" id="stack"><div className="section-index">03 - STACK / PRACTICE</div><div className="stack-heading"><h2>The tools are<br /><span>verbs.</span> Not identity.</h2><p>I choose the simplest tool that can make the next useful decision obvious.</p></div><div className="skill-switcher" role="group" aria-label="Skills by area">{Object.entries(skills).map(([key, skill]) => <button key={key} className={activeSkill === key ? 'active' : ''} onClick={() => setActiveSkill(key)} aria-pressed={activeSkill === key}>{skill.label}<span>↗</span></button>)}</div><div className="skill-detail"><div><p className="kicker">CURRENTLY IN THE TOOLBOX</p><h3>{skills[activeSkill].description}</h3></div><ul>{skills[activeSkill].items.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong><em>{item === 'PHP + Laravel' ? 'building fluency' : index < 2 ? 'in rotation' : 'building fluency'}</em></li>)}</ul></div></section>

        <section className="contact-section section-pad" id="contact"><div className="contact-card"><div><div className="section-index">04 - CONTACT</div><h2>Have an internship opportunity?</h2><p>I&apos;m looking for a {profile.roleSummary} internship in {profile.preferredLocation}, where I can learn quickly, contribute carefully, and grow through real product work.</p></div><ContactForm fallbackEmail={profile.email} /><div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><div className="social-links">{socialLink('GitHub', profile.links.github)}{socialLink('LinkedIn', profile.links.linkedin)}</div></div></div></section>
      </main>

      <footer className="site-footer"><span>BUILT WITH INTENTION / REACT + EXPRESS + POSTGRESQL</span><span>© 2026 {profile.shortName.toUpperCase()}</span></footer>
    </div>

    {indexOpen && <QuickIndex sections={sections} onJump={jumpTo} onClose={() => setIndexOpen(false)} />}
  </div>
}

export default App
