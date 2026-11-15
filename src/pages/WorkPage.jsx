import { useState } from 'react'
import { ProjectCard, ProjectDetails } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function WorkPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return <section className="work-section page-section section-pad"><div className="section-heading-row"><div><div className="section-index">Selected work</div><h1>BroBlendz booking system.</h1></div><p>A deployed capstone system for bookings, payments, refunds, and notifications.</p></div><div className="project-grid single-project">{projects.map((project) => <ProjectCard key={project.id} project={project} selected={selectedProject === project.id} onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)} />)}</div>{selectedProject && <ProjectDetails project={projects.find((project) => project.id === selectedProject)} onClose={() => setSelectedProject(null)} />}</section>
}
