import { skills } from '../../data/portfolio'

const sideSkills = skills.flatMap((group) => group.items).slice(0, 8)

function SideItem({ text, index, side }) {
  return (
    <div className={`hero__side-item hero__side-item--${side} hero__side-item--${index + 1} hero__side-item--skill`}>
      {text}
    </div>
  )
}

export default function HeroSideDecor() {
  const leftItems = sideSkills.slice(0, 4)
  const rightItems = sideSkills.slice(4, 8)

  return (
    <div className="hero__side-decor" aria-hidden="true">
      <div className="hero__side-col hero__side-col--left">
        {leftItems.map((text, index) => (
          <SideItem key={`left-${text}`} text={text} index={index} side="left" />
        ))}
      </div>
      <div className="hero__side-col hero__side-col--right">
        {rightItems.map((text, index) => (
          <SideItem key={`right-${text}`} text={text} index={index} side="right" />
        ))}
      </div>
    </div>
  )
}
