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
  bio: 'Information Technology student graduating in 2027, building practical web products with React, JavaScript, Tailwind CSS, and Express.js. I am building fluency in PostgreSQL while turning real workflows into clear, dependable interfaces, and I am looking for a web development or IT support internship where I can learn quickly and contribute carefully.',
  links: { github: 'https://github.com/princearvildean', linkedin: 'https://www.linkedin.com/in/prince-arvildean-seguros-a75a253b6/' },
}

export const projects = [
  {
    id: 'broblendz',
    number: '01',
    type: 'PRODUCT',
    year: 'FEB 2025 - NOV 2026',
    title: 'BroBlendz booking system',
    summary: 'A full-stack barbershop booking and management system with online payments, customer self-service, and an admin workspace.',
    detail: 'Co-developed and deployed as a four-member capstone team from February 2025 to November 7, 2026. I contributed across both the React customer website and Laravel backend, including booking workflows, availability rules, payment handling, administration, and notification flows. We also used AI-assisted development workflows for exploration, implementation drafts, debugging, and documentation, with human review and validation throughout.',
    metric: 'Deployed full-stack system',
    tags: ['React 19', 'Vite', 'Tailwind CSS 4', 'Axios', 'Laravel 13', 'PHP 8.3+', 'PostgreSQL', 'Sanctum', 'PayMongo', 'Brevo', 'iProgSMS', 'Cloudinary', 'Docker', 'Render'],
    accent: 'blue',
    liveUrl: 'https://broblendz-frontend-nh6p.onrender.com/',
    repoUrl: '',
    repoPrivate: true,
    screenshots: [
      { src: '/broblendz/broblendz-home.png', alt: 'BroBlendz customer landing page with haircut imagery and booking navigation.', caption: 'Customer landing page / clear path into the booking flow' },
      { src: '/broblendz/branch-selection.png', alt: 'BroBlendz booking screen for choosing a branch and barber.', caption: 'Branch and barber selection / customer booking workflow' },
      { src: '/broblendz/service-detail.png', alt: 'BroBlendz service card showing a haircut image, price, and duration.', caption: 'Service detail / price and duration information' },
      { src: '/broblendz/booking-calendar.png', alt: 'BroBlendz appointment calendar for choosing a date and available time.', caption: 'Appointment calendar / availability before customer details and payment' },
    ],
  },
]

export const skills = {
  frontend: { label: 'Frontend', description: 'Interfaces that feel obvious on the first pass.', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  backend: { label: 'Backend', description: 'JavaScript services with a clear path from request to data.', items: ['Express.js', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  practice: { label: 'Tools + Workflow', description: 'The tools and working habits that help a team ship reliably.', items: ['AI-assisted development', 'Git / GitHub', 'Docker / Render', 'PHP + Laravel'] },
}

export const sections = [
  { id: 'top', path: '/', label: 'Start', index: '00' },
  { id: 'about', path: '/about', label: 'About', index: '01' },
  { id: 'work', path: '/work', label: 'Work', index: '02' },
  { id: 'stack', path: '/stack', label: 'Stack', index: '03' },
  { id: 'contact', path: '/contact', label: 'Contact', index: '04' },
]
