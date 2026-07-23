import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import HeroBackground from './home/HeroBackground'
import HeroSideDecor from './home/HeroSideDecor'
import ProfileCard3D from './home/ProfileCard3D'
import MotionButton from './home/MotionButton'
import SiteNav from './SiteNav'
import SocialLinks from './SocialLinks'
import '../styles/home.css'

const ease = [0.22, 1, 0.36, 1]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
}

export default function Hero() {
  return (
    <section id="home" className="hero hero--premium hero--unified">
      <HeroBackground />
      <HeroSideDecor />

      <div className="hero__shell">
        <ProfileCard3D />

        <motion.div
          className="hero__text"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__badge" variants={fadeUp}>
            <span className="hero__badge-dot" aria-hidden="true" />
            {personalInfo.location}
          </motion.span>

          <motion.h1 className="hero__title" variants={fadeUp}>
            Hi, I&apos;m{' '}
            <span className="hero__name">{personalInfo.name}</span>
          </motion.h1>

          <motion.p className="hero__role" variants={fadeUp}>
            {personalInfo.title}
          </motion.p>

          <motion.p className="hero__tagline" variants={fadeUp}>
            {personalInfo.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeUp}>
            <MotionButton to="/projects" variant="primary">
              See my work
            </MotionButton>
            <MotionButton href={`mailto:${personalInfo.email}`} variant="ghost">
              Say hello
            </MotionButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__chrome"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35, ease }}
        >
          <SiteNav className="site-nav--hero" />
          <SocialLinks className="social-links--hero" />
        </motion.div>
      </div>
    </section>
  )
}
