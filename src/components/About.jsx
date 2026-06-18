import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section__header">
        <span className="section__label">About</span>
        <h2 className="section__title">A little about me</h2>
      </div>

      <div className="about__content">
        <div className="about__bio">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="about__highlights">
          {about.highlights.map((item) => (
            <div key={item.label} className="about__highlight">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
