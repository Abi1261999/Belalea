import { useCallback, useState } from 'react'
import AboutPage from './components/AboutPage'
import BlogPage from './components/BlogPage'
import BlogSinglePage from './components/BlogSinglePage'
import ContactPage from './components/ContactPage'
import PageImage from './components/PageImage'
import ProductPage from './components/ProductPage'
import ShopPage from './components/ShopPage'
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

    if (target === 'shop-page') {
      setCurrentPage('shop')
      window.history.replaceState(null, '', '#catalog')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'product-page') {
      setCurrentPage('product')
      window.history.replaceState(null, '', '#product')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'blog-page') {
      setCurrentPage('blog')
      window.history.replaceState(null, '', '#news')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'blog-single-page') {
      setCurrentPage('blog-single')
      window.history.replaceState(null, '', '#blog-single')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target === 'contacts') {
      setCurrentPage('contact')
      window.history.replaceState(null, '', '#contacts')
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
      ) : currentPage === 'shop' ? (
        <ShopPage onNavigate={navigateTo} />
      ) : currentPage === 'product' ? (
        <ProductPage onNavigate={navigateTo} />
      ) : currentPage === 'blog' ? (
        <BlogPage onNavigate={navigateTo} />
      ) : currentPage === 'blog-single' ? (
        <BlogSinglePage onNavigate={navigateTo} />
      ) : currentPage === 'contact' ? (
        <ContactPage onNavigate={navigateTo} />
      ) : (
        <PageImage onNavigate={navigateTo} />
      )}
    </div>
  )
}

export default App
