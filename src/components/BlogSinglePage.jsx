import blogSingleImage from '../assets/blog-single-page.jpg'
import './BlogSinglePage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 3654

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'shop-page', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'blog-page', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'Основное изображение новости', target: 'blog-single-page', x: 0, y: 205, width: 1920, height: 720 },
  { label: 'Содержание статьи', target: 'blog-single-page', x: 490, y: 1240, width: 950, height: 1680 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function BlogSinglePage({ onNavigate }) {
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
    <main className="blog-single-page-image" aria-label="Belaléa blog article page design">
      <div className="blog-single-page-image__canvas">
        <img
          className="blog-single-page-image__asset"
          src={blogSingleImage}
          alt="Belaléa blog article page about organic food"
          width="1920"
          height="3654"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="blog-single-page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="blog-single-page-image__search-input"
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
            className="blog-single-page-image__search-button"
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
            className="blog-single-page-image__hotspot"
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

export default BlogSinglePage
