import { useCallback, useState } from 'react'
import AboutPage from './components/AboutPage'
import PageImage from './components/PageImage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const navigateTo = useCallback((target) => {
    if (target === 'about-page') {
      setCurrentPage('about')
      window.history.replaceState(null, '', '#about')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setCurrentPage('home')
    window.history.replaceState(null, '', target ? `#${target}` : '#top')

    window.setTimeout(() => {
      const section = document.getElementById(target || 'top')
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }, [])

  return (
    <div className="app">
      {currentPage === 'about' ? (
        <AboutPage onNavigate={navigateTo} />
      ) : (
        <PageImage onNavigate={navigateTo} />
      )}
    </div>
  )
}

export default App
