import { motion } from 'framer-motion'
import { personalInfo } from '../../data/portfolio'

const photoSrc = `${import.meta.env.BASE_URL}${personalInfo.photo.replace(/^\//, '')}`

export default function ProfileCard3D() {
  return (
    <motion.div
      className="hero__visual-wrap"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero__avatar-frame">
        <div className="hero__glow-ring" aria-hidden="true" />
        <div className="hero__card-glass">
          {personalInfo.photo ? (
            <img
              src={photoSrc}
              alt={`${personalInfo.name} profile`}
              className="hero__photo"
              loading="eager"
              decoding="async"
            />
          ) : (
            <span className="hero__initial">{personalInfo.name.charAt(0)}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
