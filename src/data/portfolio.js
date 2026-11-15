export const profile = {
  initials: 'PS',
  name: 'Prince Arvildean B. Seguros',
  shortName: 'Prince Seguros',
  email: 'princearvil123@gmail.com',
  location: 'Philippines',
  degree: 'BS Information Technology',
  graduation: '2027',
  availability: 'Internship opportunities',
  roles: 'Web Development / IT Support',
  roleSummary: 'web development or IT support',
  preferredLocation: 'Makati City / Metro Manila',
  bio: 'Information Technology student graduating in 2027, building practical web products with React, JavaScript, Tailwind CSS, Express.js, and PostgreSQL. I enjoy turning real workflows into clear, dependable interfaces and I am looking for a web development or IT support internship where I can learn quickly and contribute carefully.',
  links: { github: 'https://github.com/princearvildean', linkedin: 'https://www.linkedin.com/in/prince-arvildean-seguros-a75a253b6/' },
}

export const projects = [
  {
    id: 'broblendz',
    number: '01',
    type: 'PRODUCT',
    year: '2025-PRESENT',
    title: 'BroBlendz booking system',
    summary: 'A full-stack appointment booking and online payment system with SMS notifications and an administrative portal.',
    detail: 'Built and deployed with a four-member team. The system supports customer booking workflows, appointment administration, online payments and refunds, plus email and SMS communication. We also used AI-assisted development workflows for exploration, implementation drafts, debugging, and documentation, with human review and validation throughout.',
    metric: 'Deployed full-stack system',
    tags: ['React', 'Tailwind', 'Laravel', 'PostgreSQL', 'Docker', 'Render'],
    accent: 'blue',
    liveUrl: 'https://broblendz-frontend-nh6p.onrender.com/',
    repoUrl: '',
  },
]

export const skills = {
  frontend: { label: 'Frontend', description: 'Interfaces that feel obvious on the first pass.', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  backend: { label: 'Backend', description: 'JavaScript services with a clear path from request to data.', items: ['Express.js', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  practice: { label: 'Tools + Workflow', description: 'The tools and working habits that help a team ship reliably.', items: ['AI-assisted development', 'Git / GitHub', 'Docker / Render', 'PHP + Laravel'] },
}

export const sections = [
  { id: 'top', label: 'Start', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'work', label: 'Work', index: '02' },
  { id: 'stack', label: 'Stack', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
]
