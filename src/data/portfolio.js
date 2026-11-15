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
  bio: 'I am an Information Technology student graduating in 2027. I build practical web projects with React, JavaScript, Tailwind CSS, and Express.js. I am building my PostgreSQL skills and looking for a web development or IT support internship where I can contribute to web projects and technical support tasks.',
  links: { github: 'https://github.com/princearvildean', linkedin: 'https://www.linkedin.com/in/prince-arvildean-seguros-a75a253b6/' },
}

export const projects = [
  {
    id: 'broblendz',
    number: '01',
    type: 'PRODUCT',
    year: 'FEB 2026 - NOV 2026',
    title: 'BroBlendz booking system',
    summary: 'A barbershop booking and management system with online payments, customer booking, and tools for staff.',
    detail: 'Co-developed and deployed as a four-member capstone team from February 2026 to November 7, 2026. I contributed to both the React customer website and Laravel backend, including booking workflows, availability rules, payment handling, administration, and notifications. We used AI tools to explore ideas, draft code, debug problems, and document the system. We reviewed and tested the output ourselves.',
    metric: 'Live booking and management system',
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
  frontend: { label: 'Frontend', description: 'Interfaces that are easy to understand and use.', items: ['React', 'JavaScript', 'HTML / CSS', 'Tailwind CSS'] },
  backend: { label: 'Backend', description: 'Back-end services that handle requests and data.', items: ['Express.js', 'Node.js', 'REST APIs', 'PostgreSQL'] },
  practice: { label: 'Tools + Workflow', description: 'Tools I use to build, test, and deploy projects.', items: ['AI-assisted development', 'Git / GitHub', 'Docker / Render', 'PHP + Laravel'] },
}

export const sections = [
  { id: 'top', path: '/', label: 'Start', index: '00' },
  { id: 'about', path: '/about', label: 'About', index: '01' },
  { id: 'work', path: '/work', label: 'Work', index: '02' },
  { id: 'stack', path: '/stack', label: 'Stack', index: '03' },
  { id: 'contact', path: '/contact', label: 'Contact', index: '04' },
]
