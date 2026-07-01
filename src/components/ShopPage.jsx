import shopImage from '../assets/shop-page.jpg'
import './ShopPage.css'

const IMAGE_WIDTH = 1920
const IMAGE_HEIGHT = 3371

const HOTSPOTS = [
  { label: 'На главную', target: 'top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', target: 'about-page', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', target: 'shop-page', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', target: 'dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', target: 'blog-page', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Контакты', target: 'contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'Тыквенное масло', target: 'product-page', x: 260, y: 760, width: 330, height: 560 },
  { label: 'Кунжутное масло', target: 'product-page', x: 620, y: 760, width: 330, height: 560 },
  { label: 'Масло грецкого ореха', target: 'product-page', x: 980, y: 760, width: 330, height: 560 },
  { label: 'Конопляное масло', target: 'product-page', x: 1340, y: 760, width: 330, height: 560 },
  { label: 'Мука рисовая 1', target: 'product-page', x: 260, y: 1430, width: 330, height: 560 },
  { label: 'Мука рисовая 2', target: 'product-page', x: 620, y: 1430, width: 330, height: 560 },
  { label: 'Мука рисовая 3', target: 'product-page', x: 980, y: 1430, width: 330, height: 560 },
  { label: 'Мука рисовая 4', target: 'product-page', x: 1340, y: 1430, width: 330, height: 560 },
  { label: 'Масло тыквенное 2', target: 'product-page', x: 260, y: 2110, width: 330, height: 330 },
  { label: 'Масло кунжутное 2', target: 'product-page', x: 620, y: 2110, width: 330, height: 330 },
  { label: 'Масло грецкого ореха 2', target: 'product-page', x: 980, y: 2110, width: 330, height: 330 },
  { label: 'Масло конопляное 2', target: 'product-page', x: 1340, y: 2110, width: 330, height: 330 },
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1360, y: 2674, width: 220, height: 82 },
  { label: 'Email', href: 'mailto:needhelp@organia.com', x: 450, y: 3035, width: 160, height: 70 },
  { label: 'Телефон', href: 'tel:666888888', x: 448, y: 3127, width: 164, height: 70 },
  { label: 'Instagram', target: 'contacts', x: 830, y: 3204, width: 44, height: 44 },
  { label: 'Facebook', target: 'contacts', x: 916, y: 3204, width: 44, height: 44 },
  { label: 'Twitter', target: 'contacts', x: 998, y: 3204, width: 44, height: 44 },
  { label: 'Pinterest', target: 'contacts', x: 1080, y: 3204, width: 44, height: 44 },
  { label: 'Style Guide', target: 'top', x: 1320, y: 3022, width: 150, height: 42 },
  { label: '404 Not Found', target: 'top', x: 1320, y: 3074, width: 170, height: 42 },
  { label: 'Password Protected', target: 'top', x: 1320, y: 3126, width: 220, height: 42 },
  { label: 'Licences', target: 'top', x: 1320, y: 3178, width: 130, height: 42 },
  { label: 'Changelog', target: 'top', x: 1320, y: 3230, width: 150, height: 42 },
]

const SEARCH_BOX = { x: 1184, y: 70, width: 300, height: 72 }
const SEARCH_BUTTON = { x: 1490, y: 62, width: 80, height: 84 }
const SUBSCRIBE_BOX = { x: 996, y: 2674, width: 344, height: 82 }
const SUBSCRIBE_BUTTON = { x: 1360, y: 2674, width: 220, height: 82 }

function toPercent(value, total) {
  return `${(value / total) * 100}%`
}

function ShopPage({ onNavigate }) {
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
    <main className="shop-page-image" aria-label="Belaléa catalog page design">
      <div className="shop-page-image__canvas">
        <img
          className="shop-page-image__asset"
          src={shopImage}
          alt="Belaléa catalog page with products, subscription banner, and footer"
          width="1920"
          height="3371"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          draggable="false"
        />

        <form className="shop-page-image__search" onSubmit={handleSearch} role="search">
          <input
            className="shop-page-image__search-input"
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
            className="shop-page-image__search-button"
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

        <form className="shop-page-image__subscribe" onSubmit={handleSubscribe}>
          <input
            className="shop-page-image__subscribe-input"
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
            className="shop-page-image__subscribe-button"
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
            className="shop-page-image__hotspot"
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

export default ShopPage
