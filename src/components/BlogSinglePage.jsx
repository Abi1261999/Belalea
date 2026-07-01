import blogSingleImage from '../assets/blog-single-content.jpg'
import footerImage from '../assets/footer-section.jpg'
import newsletterImage from '../assets/newsletter-section.jpg'
import './BlogSinglePage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 2920
const NEWSLETTER_WIDTH = 1400
const NEWSLETTER_HEIGHT = 323
const FOOTER_WIDTH = 1297
const FOOTER_HEIGHT = 343

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

const NEWSLETTER_HOTSPOTS = [
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1100, y: 122, width: 220, height: 82 },
]

const FOOTER_HOTSPOTS = [
  { label: 'Email', href: 'mailto:needhelp@organia.com', x: 112, y: 112, width: 180, height: 54 },
  { label: 'Телефон', href: 'tel:666888888', x: 150, y: 204, width: 150, height: 54 },
  { label: 'Instagram', target: 'contacts', x: 506, y: 210, width: 52, height: 52 },
  { label: 'Facebook', target: 'contacts', x: 588, y: 210, width: 52, height: 52 },
  { label: 'Twitter', target: 'contacts', x: 670, y: 210, width: 52, height: 52 },
  { label: 'Pinterest', target: 'contacts', x: 752, y: 210, width: 52, height: 52 },
  { label: 'Style Guide', target: 'top', x: 1010, y: 68, width: 150, height: 42 },
  { label: '404 Not Found', target: 'top', x: 1010, y: 119, width: 170, height: 42 },
  { label: 'Password Protected', target: 'top', x: 1010, y: 170, width: 220, height: 42 },
  { label: 'Licences', target: 'top', x: 1010, y: 222, width: 130, height: 42 },
  { label: 'Changelog', target: 'top', x: 1010, y: 274, width: 150, height: 42 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }
const NEWSLETTER_INPUT = { x: 735, y: 122, width: 350, height: 82 }
const NEWSLETTER_BUTTON = { x: 1100, y: 122, width: 220, height: 82 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function BlogSinglePage({ onNavigate }) {
  function handleSearch(event) {
    event.preventDefault()
    onNavigate('shop-page')
  }

  function handleSubscribe(event) {
    event.preventDefault()
    window.location.href = 'mailto:needhelp@organia.com?subject=Belal%C3%A9a%20newsletter'
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
          height="2920"
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

      <div className="blog-single-page-image__newsletter">
        <img
          className="blog-single-page-image__section-asset"
          src={newsletterImage}
          alt="Belaléa newsletter subscription banner"
          width="2800"
          height="646"
          loading="eager"
          decoding="async"
          draggable="false"
        />

        <form className="blog-single-page-image__section-form" onSubmit={handleSubscribe}>
          <input
            className="blog-single-page-image__section-input"
            type="email"
            placeholder="Введите ваш e-mail адрес"
            aria-label="Email для подписки"
            style={{
              left: toPercent(NEWSLETTER_INPUT.x, NEWSLETTER_WIDTH),
              top: toPercent(NEWSLETTER_INPUT.y, NEWSLETTER_HEIGHT),
              width: toPercent(NEWSLETTER_INPUT.width, NEWSLETTER_WIDTH),
              height: toPercent(NEWSLETTER_INPUT.height, NEWSLETTER_HEIGHT),
            }}
          />
          <button
            className="blog-single-page-image__section-button"
            type="submit"
            aria-label="Подписаться на акции"
            style={{
              left: toPercent(NEWSLETTER_BUTTON.x, NEWSLETTER_WIDTH),
              top: toPercent(NEWSLETTER_BUTTON.y, NEWSLETTER_HEIGHT),
              width: toPercent(NEWSLETTER_BUTTON.width, NEWSLETTER_WIDTH),
              height: toPercent(NEWSLETTER_BUTTON.height, NEWSLETTER_HEIGHT),
            }}
          />
        </form>

        {NEWSLETTER_HOTSPOTS.map((hotspot) => (
          <a
            className="blog-single-page-image__hotspot"
            href={hotspot.href || `#${hotspot.target}`}
            key={hotspot.label}
            aria-label={hotspot.label}
            onClick={(event) => handleHotspotClick(event, hotspot)}
            style={{
              left: toPercent(hotspot.x, NEWSLETTER_WIDTH),
              top: toPercent(hotspot.y, NEWSLETTER_HEIGHT),
              width: toPercent(hotspot.width, NEWSLETTER_WIDTH),
              height: toPercent(hotspot.height, NEWSLETTER_HEIGHT),
            }}
          >
            {hotspot.label}
          </a>
        ))}
      </div>

      <div className="blog-single-page-image__footer">
        <img
          className="blog-single-page-image__section-asset"
          src={footerImage}
          alt="Belaléa footer with contact information and utility links"
          width="2594"
          height="686"
          loading="eager"
          decoding="async"
          draggable="false"
        />

        {FOOTER_HOTSPOTS.map((hotspot) => (
          <a
            className="blog-single-page-image__hotspot"
            href={hotspot.href || `#${hotspot.target}`}
            key={hotspot.label}
            aria-label={hotspot.label}
            onClick={(event) => handleHotspotClick(event, hotspot)}
            style={{
              left: toPercent(hotspot.x, FOOTER_WIDTH),
              top: toPercent(hotspot.y, FOOTER_HEIGHT),
              width: toPercent(hotspot.width, FOOTER_WIDTH),
              height: toPercent(hotspot.height, FOOTER_HEIGHT),
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
