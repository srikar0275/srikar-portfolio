import { useReducedMotion } from 'framer-motion'

const BLOBS = [
  'hero__blob hero__blob--1',
  'hero__blob hero__blob--2',
  'hero__blob hero__blob--3',
]

export default function HeroBackground() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__grid" />
      </div>
    )
  }

  return (
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__bg-gradient hero__bg-gradient--animated" />

      {BLOBS.map((className) => (
        <div key={className} className={className} />
      ))}

      <div className="hero__particles">
        {Array.from({ length: 10 }, (_, id) => (
          <span
            key={id}
            className="hero__particle"
            style={{
              left: `${(id * 19 + 8) % 92}%`,
              top: `${(id * 27 + 12) % 88}%`,
              animationDelay: `${id * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />

      <div className="hero__grid" />
    </div>
  )
}
