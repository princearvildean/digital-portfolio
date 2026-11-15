export const profile = {
  initials: 'PS',
  name: 'Prince Arvildean B. Seguros',
  shortName: 'Prince Seguros',
  email: 'princearvil123@gmail.com',
  location: 'Philippines',
  degree: 'BS Information Technology',
  graduation: '2027',
  availability: 'Internship opportunities',
  links: { github: '', linkedin: '' },
}

export const projects = [
  {
    id: 'broblendz',
    number: '01',
    type: 'PRODUCT',
    year: '2025-PRESENT',
    title: 'BroBlendz booking system',
    summary: 'A full-stack appointment booking and online payment system with SMS notifications and an administrative portal.',
    detail: 'Co-developed and deployed as part of a four-member team. The system supports customer booking workflows, appointment administration, online payments and refunds, plus email and SMS communication.',
    metric: 'Deployed full-stack system',
    tags: ['React', 'Tailwind', 'Laravel', 'PostgreSQL', 'Docker', 'Render'],
    accent: 'blue',
    liveUrl: '',
    repoUrl: '',
  },
]

export const skills = {
  frontend: { label: 'Frontend', description: 'Interfaces that feel obvious on the first pass.', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  backend: { label: 'Backend', description: 'JavaScript services with a clear path from request to data.', items: ['Express.js', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  practice: { label: 'Tools + Secondary', description: 'The integrations and secondary skills that help a team ship reliably.', items: ['MySQL', 'Git / GitHub', 'Docker / Render', 'PHP + Laravel'] },
}

export const sections = [
  { id: 'top', label: 'Start', index: '00' },
  { id: 'about', label: 'About', index: '01' },
  { id: 'work', label: 'Work', index: '02' },
  { id: 'stack', label: 'Stack', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
]
