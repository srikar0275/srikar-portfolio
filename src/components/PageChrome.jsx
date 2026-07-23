import { personalInfo } from '../data/portfolio'
import SiteNav from './SiteNav'
import SocialLinks from './SocialLinks'

export default function PageChrome() {
  const year = new Date().getFullYear()

  return (
    <div className="page-chrome">
      <SiteNav />
      <SocialLinks />
      <p className="page-chrome__copy">
        &copy; {year} {personalInfo.name}. Built with React.
      </p>
    </div>
  )
}
