import { Link } from 'react-router-dom'
import { personalInfo, skills } from '../data/portfolio'

const heroSkills = skills.flatMap((g) => g.items).slice(0, 8)

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__badge hero__enter hero__enter--1">{personalInfo.location}</span>
          <h1 className="hero__title hero__enter hero__enter--2">
            Hi, I&apos;m <em>{personalInfo.name}</em>
          </h1>
          <p className="hero__role hero__enter hero__enter--3">{personalInfo.title}</p>
          <p className="hero__tagline hero__enter hero__enter--4">{personalInfo.tagline}</p>
          <div className="hero__actions hero__enter hero__enter--5">
            <Link to="/projects" className="btn btn--primary">See my work</Link>
            <a href={`mailto:${personalInfo.email}`} className="btn btn--ghost">Say hello</a>
          </div>
          <div className="hero__skills hero__enter hero__enter--6">
            {heroSkills.map((skill) => (
              <span key={skill} className="hero__skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="hero__visual hero__enter hero__enter--4">
          <div className="hero__card">
            <div className="hero__card-inner">
              {personalInfo.photo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${personalInfo.photo.replace(/^\//, '')}`}
                  alt={`${personalInfo.name} profile`}
                  className="hero__photo"
                />
              ) : (
                <span className="hero__initial">{personalInfo.name.charAt(0)}</span>
              )}
              <p>{personalInfo.title}</p>
            </div>
          </div>
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
        </div>
      </div>
    </section>
  )
}
