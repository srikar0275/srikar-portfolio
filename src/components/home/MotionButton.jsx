import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

const MotionLink = motion.create(Link)

function Ripple({ x, y }) {
  return (
    <motion.span
      className="hero__ripple"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0.45 }}
      animate={{ scale: 4.5, opacity: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    />
  )
}

export default function MotionButton({ to, href, variant = 'primary', children }) {
  const [ripples, setRipples] = useState([])
  const reduceMotion = useReducedMotion()
  const className = `btn btn--${variant} hero__btn hero__btn--${variant}`

  const addRipple = (e) => {
    if (reduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const id = Date.now()
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  const motionProps = {
    className,
    onClick: addRipple,
    whileHover: reduceMotion ? undefined : { scale: 1.04, y: -2 },
    whileTap: reduceMotion ? undefined : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 600, damping: 24 },
  }

  const inner = (
    <>
      {ripples.map(({ id, x, y }) => (
        <Ripple key={id} x={x} y={y} />
      ))}
      <span className="hero__btn-text">{children}</span>
    </>
  )

  if (to) {
    return <MotionLink to={to} {...motionProps}>{inner}</MotionLink>
  }

  return (
    <motion.a href={href} {...motionProps}>
      {inner}
    </motion.a>
  )
}
