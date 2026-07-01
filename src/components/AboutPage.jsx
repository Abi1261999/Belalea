import aboutImage from '../assets/about-page.jpg'
import './AboutPage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 5402

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'shop-page', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'blog-page', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'Контакты в описании', target: 'contacts', x: 985, y: 1640, width: 205, height: 82 },
  { label: 'Смотреть все предложения', target: 'shop-page', x: 1400, y: 3126, width: 250, height: 84 },
  { label: 'Предложение месяца 1', target: 'product-page', x: 260, y: 3370, width: 340, height: 560 },
  { label: 'Предложение месяца 2', target: 'product-page', x: 620, y: 3370, width: 340, height: 560 },
  { label: 'Предложение месяца 3', target: 'product-page', x: 980, y: 3370, width: 340, height: 560 },
  { label: 'Предложение месяца 4', target: 'product-page', x: 1340, y: 3370, width: 340, height: 560 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function AboutPage({ onNavigate }) {
  function handleSearch(event) {
    event.preventDefault()
    onNavigate('shop-page')
  }

  function handleHotspotClick(event, hotspot) {
    event.preventDefault()
    onNavigate(hotspot.target)
  }

  return (
    <main className="about-page-image" aria-label="Belaléa about page design">
      <div className="about-page-image__canvas">
        <img
          className="about-page-image__asset"
          src={aboutImage}
          alt="Belaléa about page with natural products and monthly offers"
          width="1920"
          height="5402"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="about-page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="about-page-image__search-input"
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
            className="about-page-image__search-button"
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
            className="about-page-image__hotspot"
            href={`#${hotspot.target}`}
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

export default AboutPage
