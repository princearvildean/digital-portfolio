import { useState } from 'react'
import { ProjectCard, ProjectDetails } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return <section className="work-section page-section section-pad"><div className="section-heading-row"><div><div className="section-index">02 - SELECTED WORK</div><h1>Proof over promises.</h1></div><p>One deployed team project, with more case studies to come as I keep building.</p></div><div className="project-grid single-project">{projects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedProject === project.id} onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)} />)}</div>{selectedProject && <ProjectDetails project={projects.find((project) => project.id === selectedProject)} onClose={() => setSelectedProject(null)} />}</section>
}
