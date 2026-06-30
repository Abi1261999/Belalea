import pageImage from '../assets/belalea-page.jpg'
import './PageImage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 10929

const SECTION_TARGETS = [
  { id: 'top', top: 0 },
  { id: 'about', top: 1900 },
  { id: 'catalog', top: 2920 },
  { id: 'reviews', top: 4500 },
  { id: 'offers', top: 5880 },
  { id: 'dealers', top: 7060 },
  { id: 'news', top: 8720 },
  { id: 'contacts', top: 10020 },
]

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'catalog', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'news', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'В каталог', target: 'catalog', x: 260, y: 735, width: 216, height: 82 },
  { label: 'Новинка', target: 'catalog', x: 258, y: 1258, width: 684, height: 274 },
  { label: 'Скидка за подписку', target: 'contacts', x: 976, y: 1258, width: 686, height: 274 },
  { label: 'Подробнее о компании', target: 'about-page', x: 960, y: 2700, width: 230, height: 80 },
  { label: 'Тыквенное масло', target: 'catalog', x: 260, y: 3180, width: 330, height: 640 },
  { label: 'Кунжутное масло', target: 'catalog', x: 620, y: 3180, width: 330, height: 640 },
  { label: 'Масло грецкого ореха', target: 'catalog', x: 980, y: 3180, width: 330, height: 640 },
  { label: 'Конопляное масло', target: 'catalog', x: 1340, y: 3180, width: 330, height: 640 },
  { label: 'Смотреть все продукты', target: 'catalog', x: 830, y: 4290, width: 260, height: 82 },
  { label: 'Отзывы покупателей', target: 'reviews', x: 580, y: 4550, width: 760, height: 520 },
  { label: 'Смотреть все предложения', target: 'offers', x: 1400, y: 6090, width: 250, height: 84 },
  { label: 'Предложение месяца 1', target: 'offers', x: 260, y: 6280, width: 340, height: 550 },
  { label: 'Предложение месяца 2', target: 'offers', x: 628, y: 6280, width: 328, height: 550 },
  { label: 'Предложение месяца 3', target: 'offers', x: 986, y: 6280, width: 328, height: 550 },
  { label: 'Предложение месяца 4', target: 'offers', x: 1340, y: 6280, width: 330, height: 550 },
  { label: 'Натуральные масла', target: 'catalog', x: 0, y: 8020, width: 615, height: 470 },
  { label: 'Новинки', target: 'catalog', x: 652, y: 8020, width: 615, height: 470 },
  { label: 'Полезная мука', target: 'catalog', x: 1308, y: 8020, width: 612, height: 470 },
  { label: 'Больше новостей', target: 'news', x: 1410, y: 9050, width: 252, height: 84 },
  { label: 'Читать новость о салате', target: 'news', x: 350, y: 9600, width: 230, height: 82 },
  { label: 'Читать новость о витаминах', target: 'news', x: 1070, y: 9600, width: 230, height: 82 },
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1360, y: 10106, width: 220, height: 82 },
  { label: 'Email', href: 'mailto:needhelp@organia.com', x: 450, y: 10470, width: 160, height: 70 },
  { label: 'Телефон', href: 'tel:666888888', x: 448, y: 10562, width: 164, height: 70 },
  { label: 'Instagram', target: 'contacts', x: 830, y: 10640, width: 44, height: 44 },
  { label: 'Facebook', target: 'contacts', x: 916, y: 10640, width: 44, height: 44 },
  { label: 'Twitter', target: 'contacts', x: 998, y: 10640, width: 44, height: 44 },
  { label: 'Pinterest', target: 'contacts', x: 1080, y: 10640, width: 44, height: 44 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function PageImage({ onNavigate }) {
  function handleSearch(event) {
    event.preventDefault()
    onNavigate('catalog')
  }

  function handleHotspotClick(event, hotspot) {
    if (!hotspot.target) return
    event.preventDefault()
    onNavigate(hotspot.target)
  }

  return (
    <main className="page-image" aria-label="Belaléa homepage design">
      <div className="page-image__canvas">
        {SECTION_TARGETS.map((target) => (
          <span
            className="page-image__target"
            id={target.id}
            key={target.id}
            style={{ top: toPercent(target.top, IMAGE_HEIGHT) }}
            aria-hidden="true"
          />
        ))}

        <img
          className="page-image__asset"
          src={pageImage}
          alt="Belaléa homepage with oils and flour from farm ingredients"
          width="1920"
          height="10929"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="page-image__search-input"
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
            className="page-image__search-button"
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
            className="page-image__hotspot"
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

export default PageImage
