import { Link } from 'react-router-dom'
import { profile, projects } from '../data/portfolio'

export function HomePage() {
  const featuredProject = projects[0]

  return <>
    <section className="hero-section section-pad">
      <div className="hero-copy-wrap"><p className="kicker">INFORMATION TECHNOLOGY STUDENT / INTERNSHIP SEEKER</p><h1>Interfaces for<br /><span>uncertain</span> moments.</h1><p className="hero-lede">I&apos;m {profile.name} — an Information Technology student building digital products that are easier to understand, easier to use, and harder to forget.</p><div className="hero-actions"><Link className="primary-link" to="/work">View selected work <span>↘</span></Link><Link className="text-button" to="/about">Read the short version <span>→</span></Link></div></div>
      <div className="hero-map" aria-label="Interactive portrait card"><div className="map-label map-label-top">CURRENT POSITION <strong>01 / 04</strong></div><div className="photo-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="photo-card"><img src="/profile-photo.jpg" alt={`Portrait of ${profile.name}`} /><span className="photo-caption">PRINCE / IT STUDENT</span></div><span className="orbit-tag tag-a">REACT</span><span className="orbit-tag tag-b">EXPRESS</span><span className="orbit-tag tag-c">PG</span></div><div className="map-label map-label-bottom">A small system for making<br /><strong>useful things feel human.</strong></div></div>
    </section>
    <section className="home-brief section-pad"><div className="section-index">01 - START HERE</div><div className="home-brief-grid"><h2>Student developer. Product-minded. Ready to learn in public.</h2><div><p>{profile.bio}</p><p className="home-availability">OPEN TO {profile.roleSummary.toUpperCase()} INTERNSHIPS / {profile.preferredLocation.toUpperCase()}</p><Link className="primary-link" to="/contact">Let&apos;s talk <span>↗</span></Link></div></div></section>
    <section className="home-feature section-pad"><div className="section-index">02 - FEATURED WORK</div><div className="home-feature-row"><div><p className="kicker">{featuredProject.type} / {featuredProject.year}</p><h2>{featuredProject.title}</h2><p>{featuredProject.summary}</p></div><Link className="text-button" to="/work">Open case study <span>→</span></Link></div></section>
  </>
}
