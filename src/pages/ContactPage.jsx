import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/portfolio'

function socialLink(label, url) {
  return url ? <a href={url} target="_blank" rel="noreferrer">{label}</a> : <span className="pending-social">{label} link pending</span>
}

export function ContactPage() {
  return <section className="contact-section page-section section-pad"><div className="contact-card"><div><div className="section-index">Contact</div><h1>Discuss an internship.</h1><p>I am looking for a {profile.roleSummary} internship in {profile.preferredLocation}. I can contribute to practical web work and IT support.</p></div><ContactForm fallbackEmail={profile.email} /><div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}>Email Prince <span>↗</span></a><div className="social-links">{socialLink('GitHub', profile.links.github)}{socialLink('LinkedIn', profile.links.linkedin)}</div></div></div></section>
}
