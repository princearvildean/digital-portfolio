export function ProjectCard({ project, selected, onSelect }) {
  return <button className={`project-card ${project.accent} ${selected ? 'selected' : ''}`} onClick={onSelect} aria-expanded={selected} aria-controls={`case-${project.id}`}>
    <span className="card-number">{project.number} / {project.type}</span>
    <span className="card-year">{project.year}</span>
    <span className="card-shape" aria-hidden="true"><i /><i /><i /></span>
    <span className="card-content"><strong>{project.title}</strong><span>{project.summary}</span></span>
    <span className="card-cta">{selected ? 'Close case' : 'Open case'} <b>{selected ? '-' : '↗'}</b></span>
  </button>
}

export function ProjectDetails({ project, onClose }) {
  return <div id={`case-${project.id}`} className={`project-details ${project.accent}`}>
    <div><p className="kicker">Case {project.number} · {project.type}</p><h3>{project.title}</h3><p>{project.detail}</p></div>
    <div className="detail-side"><span>OUTCOME</span><strong>{project.metric}</strong><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="project-links">{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a> : <span>Live link pending</span>}{project.repoUrl ? <a href={project.repoUrl} target="_blank" rel="noreferrer">Source code ↗</a> : <span>Repository pending</span>}</div>
      <button onClick={onClose}>Close case <span>x</span></button>
    </div>
  </div>
}
