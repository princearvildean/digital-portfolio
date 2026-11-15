export function ProjectCard({ project, selected, onSelect }) {
  return <button className={`project-card ${project.accent} ${selected ? 'selected' : ''}`} onClick={onSelect} aria-expanded={selected} aria-controls={`case-${project.id}`}>
    <span className="card-number">{project.number} / {project.type}</span>
    <span className="card-year">{project.year}</span>
    <span className="card-content"><strong>{project.title}</strong><span>{project.summary}</span></span>
    <span className="card-cta">{selected ? 'Close case' : 'Open case'} <b>{selected ? '-' : '->'}</b></span>
  </button>
}

export function ProjectDetails({ project, onClose }) {
  return <div id={`case-${project.id}`} className={`project-details ${project.accent}`}>
    <div className="case-study-copy"><p className="kicker">Case {project.number} / {project.type}</p><h3>{project.title}</h3><p>{project.detail}</p>{project.screenshots?.length > 0 && <div className="case-study-media" aria-label={`${project.title} interface screenshots`}>{project.screenshots.map((screenshot) => <figure key={screenshot.src}><img src={screenshot.src} alt={screenshot.alt} loading="lazy" /><figcaption>{screenshot.caption}</figcaption></figure>)}</div>}</div>
    <div className="detail-side"><span>OUTCOME</span><strong>{project.metric}</strong><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-links">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project -&gt;</a> : <span>Live link pending</span>}{project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer">Source code -&gt;</a> : <span>{project.repoPrivate ? 'Repository private' : 'Repository pending'}</span>}</div>
      <button onClick={onClose}>Close case <span>x</span></button>
    </div>
  </div>
}
