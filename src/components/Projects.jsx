import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolio'

function getLiveHref(liveUrl) {
  if (/^https?:\/\//i.test(liveUrl)) return liveUrl
  return `${import.meta.env.BASE_URL}${liveUrl.replace(/^\//, '')}`
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      style={{ '--card-delay': `${index * 0.15}s` }}
    >
      <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="project-card__actions">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
        )}
        {project.liveUrl && (
          <a
            href={getLiveHref(project.liveUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__live"
          >
            Live
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('projects--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="section projects">
      <div className="section__header projects__header">
        <span className="section__label">Work</span>
        <h2 className="section__title">Selected projects</h2>
      </div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
