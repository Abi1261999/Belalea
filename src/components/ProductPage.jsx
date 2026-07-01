import productImage from '../assets/product-page.jpg'
import './ProductPage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 3458

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'shop-page', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'blog-page', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'Основное изображение продукта', target: 'product-page', x: 260, y: 790, width: 590, height: 710 },
  { label: 'Миниатюра продукта 1', target: 'product-page', x: 315, y: 1525, width: 105, height: 110 },
  { label: 'Миниатюра продукта 2', target: 'product-page', x: 445, y: 1525, width: 105, height: 110 },
  { label: 'Миниатюра продукта 3', target: 'product-page', x: 575, y: 1525, width: 105, height: 110 },
  { label: 'Миниатюра продукта 4', target: 'product-page', x: 705, y: 1525, width: 105, height: 110 },
  { label: 'Купить на Wildberries', href: 'https://www.wildberries.ru/', x: 940, y: 1138, width: 210, height: 82 },
  { label: 'Купить на Ozon', href: 'https://www.ozon.ru/', x: 1170, y: 1138, width: 210, height: 82 },
  { label: 'Похожий продукт 1', target: 'product-page', x: 260, y: 1785, width: 330, height: 550 },
  { label: 'Похожий продукт 2', target: 'product-page', x: 620, y: 1785, width: 330, height: 550 },
  { label: 'Похожий продукт 3', target: 'product-page', x: 980, y: 1785, width: 330, height: 550 },
  { label: 'Похожий продукт 4', target: 'product-page', x: 1340, y: 1785, width: 330, height: 550 },
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1360, y: 2696, width: 220, height: 82 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }
const SUBSCRIBE_BOX = { x: 996, y: 2696, width: 344, height: 82 }
const SUBSCRIBE_BUTTON = { x: 1360, y: 2696, width: 220, height: 82 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function ProductPage({ onNavigate }) {
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
    <main className="product-page-image" aria-label="Belaléa product detail page design">
      <div className="product-page-image__canvas">
        <img
          className="product-page-image__asset"
          src={productImage}
          alt="Belaléa product detail page for rice flour"
          width="1920"
          height="3458"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="product-page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="product-page-image__search-input"
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
            className="product-page-image__search-button"
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

        <form className="product-page-image__subscribe" onSubmit={handleSubscribe}>
          <input
            className="product-page-image__subscribe-input"
            type="email"
            placeholder="Введите ваш e-mail адрес"
            aria-label="Email для подписки"
            style={{
              left: toPercent(SUBSCRIBE_BOX.x, IMAGE_WIDTH),
              top: toPercent(SUBSCRIBE_BOX.y, IMAGE_HEIGHT),
              width: toPercent(SUBSCRIBE_BOX.width, IMAGE_WIDTH),
              height: toPercent(SUBSCRIBE_BOX.height, IMAGE_HEIGHT),
            }}
          />
          <button
            className="product-page-image__subscribe-button"
            type="submit"
            aria-label="Подписаться на акции"
            style={{
              left: toPercent(SUBSCRIBE_BUTTON.x, IMAGE_WIDTH),
              top: toPercent(SUBSCRIBE_BUTTON.y, IMAGE_HEIGHT),
              width: toPercent(SUBSCRIBE_BUTTON.width, IMAGE_WIDTH),
              height: toPercent(SUBSCRIBE_BUTTON.height, IMAGE_HEIGHT),
            }}
          />
        </form>

        {HOTSPOTS.map((hotspot) => (
          <a
            className="product-page-image__hotspot"
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

export default ProductPage
