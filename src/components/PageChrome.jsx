import { personalInfo } from '../data/portfolio'
import SocialLinks from './SocialLinks'

export default function PageChrome() {
  const year = new Date().getFullYear()

  return (
    <footer className="page-chrome">
      <SocialLinks />
      <p className="page-chrome__copy">
        &copy; {year} {personalInfo.name}. Built with React.
      </p>
    </footer>
  )
}
