import { NavLink } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { navLinks } from '../data/portfolio'

export default function SiteNav({ className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <nav className={`site-nav ${className}`.trim()} aria-label="Main navigation">
      <ul className="site-nav__list">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'site-nav__link--active' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      className="site-nav__underline"
                      layoutId="site-nav-active"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: 'spring', stiffness: 380, damping: 30 }
                      }
                    />
                  )}
                  <span className="site-nav__text">{link.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
