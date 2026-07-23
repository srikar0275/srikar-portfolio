import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageChrome from '../components/PageChrome'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) return undefined

    document.body.classList.add('body--home')
    return () => document.body.classList.remove('body--home')
  }, [isHome])

  return (
    <div className={`app ${isHome ? 'app--home' : ''}`}>
      <ScrollToTop />
      <div className="app__main">
        <div className={isHome ? 'home-page' : 'page-content'}>
          <Outlet />
          {!isHome && <PageChrome />}
        </div>
      </div>
    </div>
  )
}
