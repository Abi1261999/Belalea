import { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.svg'
import './Header.css'

const NAV_ITEMS = [
  { label: 'О нас', href: '#about' },
  {
    label: 'КАТАЛОГ',
    href: '#catalog',
    uppercase: true,
    hasDropdown: true,
    dropdownItems: [
      { label: 'Масла', href: '#catalog' },
      { label: 'Мука', href: '#catalog' },
      { label: 'Жмых', href: '#catalog' },
    ],
  },
  { label: 'Дилерам', href: '#dealers' },
  { label: 'Новости', href: '#news' },
]

function ChevronIcon() {
  return (
    <svg
      className="header__nav-chevron"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.5" />
      <path d="M12.5 12.5L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [activeNav, setActiveNav] = useState(null)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const catalogRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (catalogRef.current && !catalogRef.current.contains(event.target)) {
        setCatalogOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log('Search:', searchQuery)
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Belaléa — на главную">
          <img src={logo} alt="Belaléa" width="180" height="55" />
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <div className="header__nav-line" aria-hidden="true" />
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`header__nav-item${item.hasDropdown ? ' header__nav-item--dropdown' : ''}`}
                ref={item.hasDropdown ? catalogRef : null}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className={`header__nav-link header__nav-link--button${activeNav === item.label ? ' header__nav-link--active' : ''}${catalogOpen ? ' header__nav-link--open' : ''}`}
                      aria-expanded={catalogOpen}
                      aria-haspopup="true"
                      onClick={() => setCatalogOpen((open) => !open)}
                      onMouseEnter={() => setActiveNav(item.label)}
                      onMouseLeave={() => setActiveNav(null)}
                    >
                      {item.label}
                      <ChevronIcon />
                    </button>
                    {catalogOpen && (
                      <ul className="header__dropdown" role="menu">
                        {item.dropdownItems.map((sub) => (
                          <li key={sub.label} role="none">
                            <a
                              href={sub.href}
                              className="header__dropdown-link"
                              role="menuitem"
                              onClick={() => setCatalogOpen(false)}
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`header__nav-link${activeNav === item.label ? ' header__nav-link--active' : ''}`}
                    onMouseEnter={() => setActiveNav(item.label)}
                    onMouseLeave={() => setActiveNav(null)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <form className="header__search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              className="header__search-input"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Поиск по сайту"
            />
            <button type="submit" className="header__search-btn" aria-label="Найти">
              <SearchIcon />
            </button>
          </form>

          <a href="#contacts" className="header__contacts-btn">
            <span className="header__contacts-dot" aria-hidden="true" />
            Контакты
          </a>
        </div>
      </div>
    </header>
  )
}
