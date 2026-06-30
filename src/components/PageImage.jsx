import pageImage from '../assets/belalea-page.jpg'
import './PageImage.css'

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
  { label: 'На главную', href: '#top', x: 150, y: 50, width: 290, height: 110 },
  { label: 'О нас', href: '#about', x: 540, y: 72, width: 90, height: 72 },
  { label: 'Каталог', href: '#catalog', x: 650, y: 72, width: 135, height: 72 },
  { label: 'Дилерам', href: '#dealers', x: 790, y: 72, width: 135, height: 72 },
  { label: 'Новости', href: '#news', x: 930, y: 72, width: 120, height: 72 },
  { label: 'Поиск по каталогу', href: '#catalog', x: 1490, y: 62, width: 80, height: 84 },
  { label: 'Контакты', href: '#contacts', x: 1582, y: 62, width: 190, height: 84 },
  { label: 'В каталог', href: '#catalog', x: 260, y: 735, width: 216, height: 82 },
  { label: 'Новинка', href: '#catalog', x: 258, y: 1258, width: 684, height: 274 },
  { label: 'Скидка за подписку', href: '#contacts', x: 976, y: 1258, width: 686, height: 274 },
  { label: 'Подробнее о компании', href: '#about', x: 960, y: 2700, width: 230, height: 80 },
  { label: 'Тыквенное масло', href: '#catalog', x: 260, y: 3180, width: 330, height: 640 },
  { label: 'Кунжутное масло', href: '#catalog', x: 620, y: 3180, width: 330, height: 640 },
  { label: 'Масло грецкого ореха', href: '#catalog', x: 980, y: 3180, width: 330, height: 640 },
  { label: 'Конопляное масло', href: '#catalog', x: 1340, y: 3180, width: 330, height: 640 },
  { label: 'Смотреть все продукты', href: '#catalog', x: 830, y: 4290, width: 260, height: 82 },
  { label: 'Отзывы покупателей', href: '#reviews', x: 580, y: 4550, width: 760, height: 520 },
  { label: 'Смотреть все предложения', href: '#offers', x: 1400, y: 6090, width: 250, height: 84 },
  { label: 'Предложение месяца 1', href: '#offers', x: 260, y: 6280, width: 340, height: 550 },
  { label: 'Предложение месяца 2', href: '#offers', x: 628, y: 6280, width: 328, height: 550 },
  { label: 'Предложение месяца 3', href: '#offers', x: 986, y: 6280, width: 328, height: 550 },
  { label: 'Предложение месяца 4', href: '#offers', x: 1340, y: 6280, width: 330, height: 550 },
  { label: 'Натуральные масла', href: '#catalog', x: 0, y: 8020, width: 615, height: 470 },
  { label: 'Новинки', href: '#catalog', x: 652, y: 8020, width: 615, height: 470 },
  { label: 'Полезная мука', href: '#catalog', x: 1308, y: 8020, width: 612, height: 470 },
  { label: 'Больше новостей', href: '#news', x: 1410, y: 9050, width: 252, height: 84 },
  { label: 'Читать новость о салате', href: '#news', x: 350, y: 9600, width: 230, height: 82 },
  { label: 'Читать новость о витаминах', href: '#news', x: 1070, y: 9600, width: 230, height: 82 },
  { label: 'Подписаться на акции', href: 'mailto:needhelp@organia.com', x: 1360, y: 10106, width: 220, height: 82 },
  { label: 'Email', href: 'mailto:needhelp@organia.com', x: 450, y: 10470, width: 160, height: 70 },
  { label: 'Телефон', href: 'tel:666888888', x: 448, y: 10562, width: 164, height: 70 },
  { label: 'Instagram', href: '#contacts', x: 830, y: 10640, width: 44, height: 44 },
  { label: 'Facebook', href: '#contacts', x: 916, y: 10640, width: 44, height: 44 },
  { label: 'Twitter', href: '#contacts', x: 998, y: 10640, width: 44, height: 44 },
  { label: 'Pinterest', href: '#contacts', x: 1080, y: 10640, width: 44, height: 44 },
]

function PageImage() {
  return (
    <main className="page-image" aria-label="Belaléa homepage design">
      <div className="page-image__canvas">
        {SECTION_TARGETS.map((target) => (
          <span
            className="page-image__target"
            id={target.id}
            key={target.id}
            style={{ top: `${target.top}px` }}
            aria-hidden="true"
          />
        ))}

        <img
          className="page-image__asset"
          src={pageImage}
          alt="Belaléa homepage with oils and flour from farm ingredients"
          width="1920"
          height="10929"
        />

        {HOTSPOTS.map((hotspot) => (
          <a
            className="page-image__hotspot"
            href={hotspot.href}
            key={hotspot.label}
            style={{
              left: `${hotspot.x}px`,
              top: `${hotspot.y}px`,
              width: `${hotspot.width}px`,
              height: `${hotspot.height}px`,
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
