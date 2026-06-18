import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, personalInfo } from '../data/portfolio'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <aside className={`sidebar ${menuOpen ? 'sidebar--open' : ''}`}>
        <NavLink to="/" className="sidebar__brand" onClick={handleNavClick} end>
          <span className="sidebar__brand-mark">S</span>
          <span className="sidebar__brand-name">{personalInfo.name}</span>
        </NavLink>

        <nav className="sidebar__nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__bottom">
          <a href={personalInfo.resumeUrl} className="btn btn--primary sidebar__resume">
            Resume
          </a>
          <div className="sidebar__social">
            {personalInfo.social.github && (
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GH
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                IN
              </a>
            )}
          </div>
        </div>
      </aside>

      <button
        className={`sidebar-toggle ${menuOpen ? 'sidebar-toggle--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>

      {menuOpen && <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  )
}
