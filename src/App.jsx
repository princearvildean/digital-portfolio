import { useEffect, useMemo, useState } from 'react'
import './App.css'

const projects = [
  {
    id: 'broblendz',
    number: '01',
    type: 'PRODUCT',
    year: '2025-PRESENT',
    title: 'BroBlendz booking system',
    summary: 'A full-stack appointment booking and online payment system with SMS notifications and an administrative portal.',
    detail: 'Co-developed and deployed as part of a four-member team. The system supports customer booking workflows, appointment administration, online payments and refunds, plus email and SMS communication.',
    metric: 'Deployed full-stack system',
    tags: ['React', 'Tailwind', 'Laravel', 'PostgreSQL', 'Docker', 'Render'],
    accent: 'blue',
  },
]

const skills = {
  frontend: { label: 'Frontend', description: 'Interfaces that feel obvious on the first pass.', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  backend: { label: 'Backend', description: 'JavaScript services with a clear path from request to data.', items: ['Express.js', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  practice: { label: 'Tools + Secondary', description: 'The integrations and secondary skills that help a team ship reliably.', items: ['MySQL', 'Git / GitHub', 'Docker / Render', 'PHP + Laravel'] },
}

const sections = [
  { id: 'top', label: 'Start', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'work', label: 'Work', index: '02' },
  { id: 'stack', label: 'Stack', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
]

function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [filter, setFilter] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSkill, setActiveSkill] = useState('frontend')
  const [indexOpen, setIndexOpen] = useState(false)
  const [quietMode, setQuietMode] = useState(false)

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

  const visibleProjects = useMemo(() => filter === 'ALL' ? projects : projects.filter((project) => project.type === filter), [filter])

  const jumpTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: quietMode ? 'auto' : 'smooth' })
    setIndexOpen(false)
  }

  return (
    <div className={`app-shell ${quietMode ? 'quiet-mode' : ''}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <aside className="site-rail" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Back to top"><span>PS</span><small>PORTFOLIO<br />/ 2026</small></a>
        <nav className="rail-nav">{sections.map((section) => <button key={section.id} className={activeSection === section.id ? 'active' : ''} onClick={() => jumpTo(section.id)} aria-current={activeSection === section.id ? 'page' : undefined}><span>{section.index}</span>{section.label}</button>)}</nav>
        <div className="rail-bottom"><span className="status-dot" /> OPEN TO INTERNSHIPS</div>
      </aside>

      <div className="content-column" id="main-content">
        <header className="topbar"><span>PRINCE SEGUROS / DIGITAL WORKBENCH</span><div><button className="quiet-toggle" onClick={() => setQuietMode((mode) => !mode)} aria-pressed={quietMode}>{quietMode ? 'MOTION: LOW' : 'MOTION: ON'}</button><button className="index-button" onClick={() => setIndexOpen(true)}><span>QUICK INDEX</span><kbd>CTRL K</kbd></button></div></header>

        <main>
          <section className="hero-section section-pad" id="top">
            <div className="hero-copy-wrap"><p className="kicker">COMPUTER SCIENCE STUDENT / CO-DEVELOPER</p><h1>Interfaces for<br /><span>uncertain</span> moments.</h1><p className="hero-lede">I&apos;m Prince Arvildean B. Seguros — an Information Technology student building digital products that are easier to understand, easier to use, and harder to forget.</p><div className="hero-actions"><a className="primary-link" href="#work">View selected work <span>↘</span></a><button className="text-button" onClick={() => jumpTo('about')}>Read the short version <span>→</span></button></div></div>
            <div className="hero-map" aria-label="Interactive portrait card">
              <div className="map-label map-label-top">CURRENT POSITION <strong>01 / 04</strong></div>
              <div className="photo-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="photo-card"><img src="/profile-photo.jpg" alt="Portrait of Prince Arvildean B. Seguros" /><span className="photo-caption">PRINCE / CO-DEVELOPER</span></div><span className="orbit-tag tag-a">REACT</span><span className="orbit-tag tag-b">EXPRESS</span><span className="orbit-tag tag-c">PG</span></div>
              <div className="map-label map-label-bottom">A small system for making<br /><strong>useful things feel human.</strong></div>
            </div>
          </section>

          <section className="about-section section-pad" id="about"><div className="section-index">01 — ABOUT</div><div className="about-grid"><h2>I care about the space between a person&apos;s intention and the interface that answers it.</h2><div className="about-notes"><p>I&apos;m Prince Arvildean B. Seguros, an Information Technology student who enjoys turning real workflows into dependable digital products.</p><div className="about-facts"><div><span>BASED IN</span><strong>Philippines</strong></div><div><span>STUDYING</span><strong>BS Information Technology</strong></div><div><span>EXPECTED</span><strong>Graduation 2027</strong></div><div><span>LOOKING FOR</span><strong>Internship opportunities</strong></div></div></div></div></section>

          <section className="work-section section-pad" id="work"><div className="section-heading-row"><div><div className="section-index">02 — SELECTED WORK</div><h2>Proof over promises.</h2></div><p>One deployed team project, with more case studies to come as I keep building.</p></div><div className="filter-bar" role="toolbar" aria-label="Filter projects">{['ALL', 'PRODUCT'].map((option) => <button key={option} className={filter === option ? 'active' : ''} onClick={() => setFilter(option)} aria-pressed={filter === option}>{option}<small>{option === 'ALL' ? projects.length : projects.filter((project) => project.type === option).length}</small></button>)}</div><div className="project-grid">{visibleProjects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedProject === project.id} onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)} />)}</div>{selectedProject && <ProjectDetails project={projects.find((project) => project.id === selectedProject)} onClose={() => setSelectedProject(null)} />}</section>

          <section className="stack-section section-pad" id="stack"><div className="section-index">03 — STACK / PRACTICE</div><div className="stack-heading"><h2>The tools are<br /><span>verbs.</span> Not identity.</h2><p>I choose the simplest tool that can make the next useful decision obvious.</p></div><div className="skill-switcher" role="tablist" aria-label="Skills by area">{Object.entries(skills).map(([key, skill]) => <button key={key} className={activeSkill === key ? 'active' : ''} onClick={() => setActiveSkill(key)} role="tab" aria-selected={activeSkill === key}>{skill.label}<span>↗</span></button>)}</div><div className="skill-detail" role="tabpanel"><div><p className="kicker">CURRENTLY IN THE TOOLBOX</p><h3>{skills[activeSkill].description}</h3></div><ul>{skills[activeSkill].items.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong><em>{item === 'PHP' ? 'building fluency' : index < 2 ? 'in rotation' : 'building fluency'}</em></li>)}</ul></div></section>

          <section className="contact-section section-pad" id="contact"><div className="contact-card"><div><div className="section-index">04 — CONTACT</div><h2>Have an internship opportunity?</h2><p>I&apos;m looking for a team where I can learn quickly, contribute carefully, and grow through real product work.</p></div><div className="contact-actions"><a className="contact-email" href="mailto:princearvil123@gmail.com">princearvil123@gmail.com <span>↗</span></a><div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></section>
        </main>

        <footer className="site-footer"><span>BUILT WITH INTENTION / REACT + EXPRESS + POSTGRESQL</span><span>© 2026 PRINCE SEGUROS</span></footer>
      </div>

      {indexOpen && <div className="index-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setIndexOpen(false)}><div className="index-dialog" role="dialog" aria-modal="true" aria-labelledby="index-title"><div className="dialog-top"><span id="index-title">QUICK INDEX</span><button onClick={() => setIndexOpen(false)} aria-label="Close quick index">ESC</button></div><p>Jump to a section. Your keyboard works here too.</p><div className="dialog-links">{sections.map((section) => <button key={section.id} onClick={() => jumpTo(section.id)}><span>{section.index}</span>{section.label}<b>↘</b></button>)}</div></div></div>}
    </div>
  )
}

function ProjectCard({ project, selected, onSelect }) {
  return <button className={`project-card ${project.accent} ${selected ? 'selected' : ''}`} onClick={onSelect} aria-expanded={selected}><span className="card-number">{project.number} / {project.type}</span><span className="card-year">{project.year}</span><span className="card-shape" aria-hidden="true"><i /><i /><i /></span><span className="card-content"><strong>{project.title}</strong><span>{project.summary}</span></span><span className="card-cta">{selected ? 'CLOSE' : 'OPEN CASE'} <b>{selected ? '−' : '↗'}</b></span></button>
}

function ProjectDetails({ project, onClose }) {
  return <div className={`project-details ${project.accent}`}><div><p className="kicker">CASE {project.number} / {project.type}</p><h3>{project.title}</h3><p>{project.detail}</p></div><div className="detail-side"><span>OUTCOME</span><strong>{project.metric}</strong><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button onClick={onClose}>Close case <span>×</span></button></div></div>
}

export default App
