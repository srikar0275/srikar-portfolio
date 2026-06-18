import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function Layout() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <div className="app__main">
        <div className="page-content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}
