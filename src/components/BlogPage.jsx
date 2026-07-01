import blogImage from '../assets/blog-page.jpg'
import './BlogPage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 3717

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'shop-page', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'blog-page', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'Новость о витамине D', target: 'blog-page', x: 258, y: 780, width: 684, height: 560 },
  { label: 'Новость о витаминах', target: 'blog-page', x: 976, y: 780, width: 686, height: 560 },
  { label: 'Новость о витамине C', target: 'blog-page', x: 258, y: 1460, width: 684, height: 560 },
  { label: 'Новость об органических продуктах', target: 'blog-page', x: 976, y: 1460, width: 686, height: 560 },
  { label: 'Новость о фруктах', target: 'blog-page', x: 258, y: 2140, width: 684, height: 560 },
  { label: 'Новость о пластике', target: 'blog-page', x: 976, y: 2140, width: 686, height: 560 },
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1360, y: 2992, width: 220, height: 82 },
  { label: 'Email', href: 'mailto:needhelp@organia.com', x: 450, y: 3378, width: 160, height: 70 },
  { label: 'Телефон', href: 'tel:666888888', x: 448, y: 3470, width: 164, height: 70 },
  { label: 'Instagram', target: 'contacts', x: 830, y: 3548, width: 44, height: 44 },
  { label: 'Facebook', target: 'contacts', x: 916, y: 3548, width: 44, height: 44 },
  { label: 'Twitter', target: 'contacts', x: 998, y: 3548, width: 44, height: 44 },
  { label: 'Pinterest', target: 'contacts', x: 1080, y: 3548, width: 44, height: 44 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function BlogPage({ onNavigate }) {
  function handleSearch(event) {
    event.preventDefault()
    onNavigate('shop-page')
  }

  function handleHotspotClick(event, hotspot) {
    if (!hotspot.target) return
    event.preventDefault()
    onNavigate(hotspot.target)
  }

  return (
    <main className="blog-page-image" aria-label="Belaléa news page design">
      <div className="blog-page-image__canvas">
        <img
          className="blog-page-image__asset"
          src={blogImage}
          alt="Belaléa news page with article cards and subscription banner"
          width="1920"
          height="3717"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="blog-page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="blog-page-image__search-input"
            type="search"
            placeholder="Поиск..."
            aria-label="Поиск по каталогу"
            style={{
              left: toPercent(SEARCH_BOX.x, IMAGE_WIDTH),
              top: toPercent(SEARCH_BOX.y, IMAGE_HEIGHT),
              width: toPercent(SEARCH_BOX.width, IMAGE_WIDTH),
              height: toPercent(SEARCH_BOX.height, IMAGE_HEIGHT),
            }}
          />
          <button
            className="blog-page-image__search-button"
            type="submit"
            aria-label="Найти"
            style={{
              left: toPercent(SEARCH_BUTTON.x, IMAGE_WIDTH),
              top: toPercent(SEARCH_BUTTON.y, IMAGE_HEIGHT),
              width: toPercent(SEARCH_BUTTON.width, IMAGE_WIDTH),
              height: toPercent(SEARCH_BUTTON.height, IMAGE_HEIGHT),
            }}
          />
        </form>

        {HOTSPOTS.map((hotspot) => (
          <a
            className="blog-page-image__hotspot"
            href={hotspot.href || `#${hotspot.target}`}
            key={hotspot.label}
            aria-label={hotspot.label}
            onClick={(event) => handleHotspotClick(event, hotspot)}
            style={{
              left: toPercent(hotspot.x, IMAGE_WIDTH),
              top: toPercent(hotspot.y, IMAGE_HEIGHT),
              width: toPercent(hotspot.width, IMAGE_WIDTH),
              height: toPercent(hotspot.height, IMAGE_HEIGHT),
            }}
          >
            {hotspot.label}
          </a>
        ))}
      </div>
    </main>
  )
}

export default BlogPage
