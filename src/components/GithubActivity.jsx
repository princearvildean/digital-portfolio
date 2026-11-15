import { useState } from 'react'

const githubProfile = 'https://github.com/princearvildean'
const contributionWidget = 'https://contribkit.app/user/princearvildean.svg?palette=github&shape=square&background=transparent'

export function GithubActivity() {
  const [failed, setFailed] = useState(false)

  return <section className="github-activity" aria-labelledby="github-activity-title">
    <div className="github-activity-heading">
      <div><p className="section-index">GitHub activity</p><h2 id="github-activity-title">Recent coding practice, in public.</h2></div>
      <a className="text-button" href={githubProfile} target="_blank" rel="noreferrer">View GitHub profile <span>-&gt;</span></a>
    </div>
    <div className="github-activity-frame">
      {failed ? <div className="github-activity-fallback"><strong>GitHub activity is temporarily unavailable.</strong><a href={githubProfile} target="_blank" rel="noreferrer">Open my GitHub profile -&gt;</a></div> : <a href={githubProfile} target="_blank" rel="noreferrer" aria-label="Open Prince Seguros GitHub profile"><img src={contributionWidget} alt="Prince Seguros GitHub contribution activity for the past year" loading="lazy" onError={() => setFailed(true)} /></a>}
    </div>
  </section>
}
