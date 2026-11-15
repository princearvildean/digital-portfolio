import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/portfolio'

function socialLink(label, url) {
  return url ? <a href={url} target="_blank" rel="noreferrer">{label}</a> : <span className="pending-social">{label} link pending</span>
}

export function ContactPage() {
  return <section className="contact-section page-section section-pad"><div className="contact-card"><div><div className="section-index">04 - CONTACT</div><h1>Have an internship opportunity?</h1><p>I&apos;m looking for a {profile.roleSummary} internship in {profile.preferredLocation}, where I can learn quickly, contribute carefully, and grow through real product work.</p></div><ContactForm fallbackEmail={profile.email} /><div className="contact-actions"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><div className="social-links">{socialLink('GitHub', profile.links.github)}{socialLink('LinkedIn', profile.links.linkedin)}</div></div></div></section>
}
