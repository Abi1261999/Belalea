import Header from './components/Header'
import HeroGraphic from './components/HeroGraphic'
import './App.css'

const products = [
  {
    name: 'Масло тыквенное',
    description: 'Нерафинированное масло холодного отжима с насыщенным ореховым вкусом.',
    tone: 'green',
  },
  {
    name: 'Масло кунжутное',
    description: 'Натуральный продукт для салатов, соусов и ежедневного рациона.',
    tone: 'sand',
  },
  {
    name: 'Масло конопляное',
    description: 'Источник природных жирных кислот, изготовленный из отборного сырья.',
    tone: 'blue',
  },
  {
    name: 'Мука и жмых',
    description: 'Полезная основа для выпечки, каш и функционального питания.',
    tone: 'rose',
  },
]

const benefits = [
  'Холодный отжим без рафинации',
  'Собственное производство в Беларуси',
  'Темная стеклянная тара для правильного хранения',
  'Оптовые поставки для магазинов и дилеров',
]

const news = [
  {
    title: 'Как выбрать масло для ежедневного рациона',
    date: '15 июня',
  },
  {
    title: 'Польза жмыха и муки из семян',
    date: '2 июня',
  },
  {
    title: 'Belaléa расширяет линейку натуральных продуктов',
    date: '21 мая',
  },
]

function App() {
  return (
    <div className="app">
      <Header />
      <HeroGraphic />

      <main className="app__main">
        <section className="section section--intro" id="about">
          <div className="section__eyebrow">О компании</div>
          <div className="intro">
            <div>
              <h2 className="section__title">Натуральные масла холодного отжима Belaléa</h2>
              <p className="section__text">
                Belaléa производит нерафинированные масла, муку и жмых из семян. Мы сохраняем
                природный вкус сырья и создаем продукты для здорового питания, домашней кухни и
                партнерских поставок.
              </p>
            </div>
            <a className="section__link" href="#catalog">
              Смотреть каталог
            </a>
          </div>
        </section>

        <section className="section" id="catalog">
          <div className="section__heading">
            <div>
              <div className="section__eyebrow">Каталог</div>
              <h2 className="section__title">Популярные продукты</h2>
            </div>
            <p className="section__lead">
              Базовая витрина React-проекта: карточки можно подключить к API или CMS, когда появится
              полный ассортимент.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className={`product-card product-card--${product.tone}`} key={product.name}>
                <div className="product-card__bottle" aria-hidden="true">
                  <span />
                </div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button type="button">Подробнее</button>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--benefits" id="dealers">
          <div>
            <div className="section__eyebrow">Партнерам</div>
            <h2 className="section__title">Почему выбирают Belaléa</h2>
            <p className="section__text">
              Страница подготовлена как основа для проекта по Figma-макету: здесь уже есть
              навигация, адаптивные секции, CTA и визуальные карточки для дальнейшей детализации.
            </p>
          </div>
          <ul className="benefit-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="news">
          <div className="section__heading">
            <div>
              <div className="section__eyebrow">Новости</div>
              <h2 className="section__title">Полезные материалы</h2>
            </div>
            <a className="section__link" href="#contacts">
              Связаться с нами
            </a>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <a href="#news">Читать</a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-panel" id="contacts">
          <div>
            <div className="section__eyebrow">Контакты</div>
            <h2>Готовы обсудить поставки?</h2>
            <p>Оставьте заявку, чтобы получить каталог, условия сотрудничества и консультацию.</p>
          </div>
          <a href="mailto:hello@belalea.example">hello@belalea.example</a>
        </section>
      </main>
    </div>
  )
}

export default App
