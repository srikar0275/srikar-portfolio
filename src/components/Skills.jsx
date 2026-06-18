import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__header">
        <span className="section__label">Skills</span>
        <h2 className="section__title">What I work with</h2>
      </div>

      <div className="skills__bento">
        {skills.map((group, i) => (
          <div key={group.category} className={`skills__block skills__block--${i + 1}`}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
