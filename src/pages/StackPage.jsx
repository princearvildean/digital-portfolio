import { useState } from 'react'
import { skills } from '../data/portfolio'

export function StackPage() {
  const [activeSkill, setActiveSkill] = useState('frontend')
  const active = skills[activeSkill]

  return <section className="stack-section page-section section-pad"><div className="section-index">Tools and skills</div><div className="stack-heading"><h1>Tools I use to build<br /><span>web projects.</span></h1><p>JavaScript is my main focus. I use these tools to build, test, and deploy projects.</p></div><div className="skill-switcher" role="group" aria-label="Skills by area">{Object.entries(skills).map(([key, skill]) => <button key={key} className={activeSkill === key ? 'active' : ''} onClick={() => setActiveSkill(key)} aria-pressed={activeSkill === key}>{skill.label}<span>↗</span></button>)}</div><div className="skill-detail"><div><p className="kicker">Current focus</p><h2>{active.description}</h2></div><ul>{active.items.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong><em>{item === 'PHP + Laravel' ? 'building fluency' : item === 'AI-assisted development' ? 'in rotation' : index < 2 ? 'in rotation' : 'building fluency'}</em></li>)}</ul></div></section>
}
