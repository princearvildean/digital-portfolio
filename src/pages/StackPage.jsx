import { useState } from 'react'
import { skills } from '../data/portfolio'

export function StackPage() {
  const [activeSkill, setActiveSkill] = useState('frontend')
  const active = skills[activeSkill]

  return <section className="stack-section page-section section-pad"><div className="section-index">03 - STACK / PRACTICE</div><div className="stack-heading"><h1>The tools are<br /><span>verbs.</span> Not identity.</h1><p>I choose the simplest tool that can make the next useful decision obvious.</p></div><div className="skill-switcher" role="group" aria-label="Skills by area">{Object.entries(skills).map(([key, skill]) => <button key={key} className={activeSkill === key ? 'active' : ''} onClick={() => setActiveSkill(key)} aria-pressed={activeSkill === key}>{skill.label}<span>↗</span></button>)}</div><div className="skill-detail"><div><p className="kicker">CURRENTLY IN THE TOOLBOX</p><h2>{active.description}</h2></div><ul>{active.items.map((item, index) => <li key={item}><span>0{index + 1}</span><strong>{item}</strong><em>{item === 'PHP + Laravel' ? 'building fluency' : item === 'AI-assisted development' ? 'in rotation' : index < 2 ? 'in rotation' : 'building fluency'}</em></li>)}</ul></div></section>
}
