import { profile } from '../data/portfolio'

export function AboutPage() {
  return <section className="about-section page-section section-pad"><div className="section-index">01 - ABOUT</div><div className="about-grid"><h1>I care about the space between a person&apos;s intention and the interface that answers it.</h1><div className="about-notes"><p>{profile.bio}</p><div className="about-facts"><div><span>BASED IN</span><strong>{profile.location}</strong></div><div><span>STUDYING</span><strong>{profile.degree}</strong></div><div><span>EXPECTED</span><strong>Graduation {profile.graduation}</strong></div><div><span>TARGET ROLES</span><strong>{profile.roles}</strong></div><div><span>PREFERRED</span><strong>{profile.preferredLocation}</strong></div></div></div></div></section>
}
