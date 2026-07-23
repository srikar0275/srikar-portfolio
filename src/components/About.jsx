import { about, personalInfo } from '../data/portfolio'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__header about__header">
        <span className="section__label">About</span>
        <h2 className="section__title">A little about me</h2>
      </div>

      <div className="about__layout">
        <aside className="about__aside" aria-label="Profile">
          <div className="about__photo-wrap">
            <img
              src={personalInfo.photo}
              alt={`Portrait of ${personalInfo.name}`}
              width={300}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="about__meta">
            <p className="about__name">{personalInfo.name}</p>
            <p className="about__role">{personalInfo.title}</p>
          </div>
        </aside>

        <div className="about__bio">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className={i === 0 ? 'about__lead' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
