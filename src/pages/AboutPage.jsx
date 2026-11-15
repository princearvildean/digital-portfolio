import { profile } from '../data/portfolio'
import { GithubActivity } from '../components/GithubActivity'

export function AboutPage() {
  return <section className="about-section page-section section-pad"><div className="section-index">About</div><div className="about-grid"><h1>Information Technology student building websites and systems for practical needs.</h1><div className="about-notes"><p>{profile.bio}</p><div className="about-facts"><div><span>Based in</span><strong>{profile.location}</strong></div><div><span>Studying</span><strong>{profile.degree}</strong></div><div><span>Expected</span><strong>Graduation {profile.graduation}</strong></div><div><span>Target roles</span><strong>{profile.roles}</strong></div><div><span>Preferred location</span><strong>{profile.preferredLocation}</strong></div></div></div></div><GithubActivity /></section>
}
