import { motion, useReducedMotion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from './icons/SocialIcons'

const socialLinks = [
  { label: 'GitHub', href: personalInfo.social.github, Icon: GitHubIcon, tone: 'github' },
  { label: 'LinkedIn', href: personalInfo.social.linkedin, Icon: LinkedInIcon, tone: 'linkedin' },
  { label: 'Instagram', href: personalInfo.social.instagram, Icon: InstagramIcon, tone: 'instagram' },
  { label: 'WhatsApp', href: personalInfo.social.whatsapp, Icon: WhatsAppIcon, tone: 'whatsapp' },
]

export default function SocialLinks({ className = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className={`social-links ${className}`.trim()}>
      {socialLinks.filter((link) => link.href).map(({ label, href, Icon, tone }) => (
        <li key={label}>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`social-links__item social-links__item--${tone}`}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            <Icon />
          </motion.a>
        </li>
      ))}
    </ul>
  )
}
