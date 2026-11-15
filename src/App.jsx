import './App.css'

const projects = [
  { number: '01', title: 'Project Atlas', type: 'FULL-STACK PRODUCT', description: 'A focused workspace for turning messy research into clear, shareable decisions.', stack: ['React', 'Express', 'PostgreSQL'], tone: 'blue' },
  { number: '02', title: 'Your next project', type: 'IN PROGRESS', description: 'A new case study will live here as you ship, learn, and collect the details that matter.', stack: ['React', 'Tailwind', 'Node.js'], tone: 'orange' },
]

const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Accessible UI', 'Express.js', 'PostgreSQL']

function App() {
  return (
    <main>
      <section className="hero page-shell" id="top">
        <div className="availability"><span /> AVAILABLE AFTER GRADUATION · 2026</div>
        <h1>I build <em>useful things</em><br />for the web.</h1>
        <p className="hero-copy">Hey, I&apos;m <strong>Your Name</strong> — a full-stack developer finishing a Computer Science degree and turning late-night ideas into dependable digital products.</p>
      </section>

      <section className="profile-band" id="about">
        <div className="profile-grid page-shell">
          <div className="portrait-frame" aria-label="Profile image placeholder"><div className="portrait-placeholder">YOUR<br />PHOTO</div><span className="sticker">THIS IS ME</span></div>
          <div className="profile-intro"><p className="eyebrow lime">MORE PERSON, LESS PERSONA.</p><h2>Curious by default.<br /><em>Serious about craft.</em></h2></div>
          <div className="profile-details"><p>I like the point where logic meets lived experience: clean data models, fast interfaces, and tiny details that make software feel obvious.</p><p>Away from the screen, I&apos;m usually learning something new, hunting for good coffee, or explaining my latest side project to patient friends.</p></div>
          <div className="fact-grid"><div><span>BASED IN</span><strong>Your City, PH</strong></div><div><span>DEGREE</span><strong>BS Computer Science</strong></div><div><span>LOOKING FOR</span><strong>Junior / Grad roles</strong></div></div>
        </div>
      </section>

      <section className="projects page-shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 002</p><h2>Proof, not promises.</h2></div><p>Things I&apos;ve designed, built, broken, and made better.</p></div>
        <div className="project-list">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
      </section>

      <section className="toolbox page-shell" id="toolbox">
        <p className="eyebrow">TOOLBOX / 003</p><h2>Tools change.<br />Thinking scales.</h2>
        <p className="toolbox-copy">I&apos;m comfortable across the stack and happiest when I can follow a problem from a user&apos;s click to a database row and back.</p>
        <div className="skills-panel"><div className="skills-tabs"><span className="active">FRONTEND</span><span>BACKEND</span><span>TOOLS</span></div><div className="terminal-line">$ list-skills --all</div><div className="skills-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><small>0{index + 1}</small><strong>{skill}</strong><span>{index < 3 ? 'daily' : 'familiar'}</span></div>)}</div></div>
      </section>

      <section className="contact" id="contact"><div className="page-shell contact-inner"><p className="eyebrow">ONE MORE TAB?</p><h2>Let&apos;s build something worth<br />bookmarking.</h2><p>I&apos;m looking for a team where I can learn fast, contribute early, and care deeply about what ships.</p><a className="contact-link" href="mailto:hello@example.com">SAY HELLO <span>↗</span></a></div></section>
    </main>
  )
}

function ProjectCard({ project }) {
  return <article className={`project-card ${project.tone}`}><div className="project-visual"><div className="browser-window"><div className="browser-bar"><i /><i /><i /></div><div className="browser-sidebar" /><div className="browser-content"><span /><span /><span /></div></div><span className="visual-note">42% FASTER REVIEW CYCLES</span></div><div className="project-copy"><p className="eyebrow">CASE {project.number}</p><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href="#contact">DISCUSS THE BUILD <span>↗</span></a></div></article>
}

export default App
