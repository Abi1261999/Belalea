import { useState } from 'react'
import logo from '../assets/logo.svg'
import './AboutPage.css'

const products = ['Масло тыквенное, 250мл', 'Масло тыквенное, 250мл', 'Масло тыквенное, 250мл', 'Масло тыквенное, 250мл']

function AboutPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    onNavigate('catalog')
  }

  return (
    <main className="about-page">
      <header className="about-header">
        <button className="about-header__logo" type="button" onClick={() => onNavigate('top')}>
          <img src={logo} alt="Belaléa" />
        </button>

        <nav className="about-header__nav" aria-label="Основная навигация">
          <button type="button" onClick={() => onNavigate('about-page')}>
            О нас
          </button>
          <button type="button" onClick={() => onNavigate('catalog')}>
            Каталог
          </button>
          <button type="button" onClick={() => onNavigate('dealers')}>
            Дилерам
          </button>
          <button type="button" onClick={() => onNavigate('news')}>
            Новости
          </button>
        </nav>

        <form className="about-header__search" onSubmit={handleSearch} role="search">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Поиск..."
            aria-label="Поиск по каталогу"
          />
          <button type="submit" aria-label="Найти">
            ●
          </button>
        </form>

        <button className="about-header__contact" type="button" onClick={() => onNavigate('contacts')}>
          Контакты
        </button>
      </header>

      <section className="about-hero">
        <h1>О нас</h1>
      </section>

      <section className="about-section about-section--intro">
        <div className="about-photo about-photo--plate" aria-hidden="true" />
        <div className="about-copy">
          <span>О нас</span>
          <h2>Натуральные продукты - здоровое население</h2>
          <p>
            Belaléa создает натуральные масла, муку и каши из фермерского сырья. Мы бережно
            сохраняем вкус и пользу семян, чтобы каждый продукт был качественным и свежим.
          </p>
          <div className="about-features">
            <article>
              <strong>Современное сельское хозяйство</strong>
              <small>Ответственный подход к производству</small>
            </article>
            <article>
              <strong>Выращиваем без пестицидов</strong>
              <small>Контроль качества на каждом этапе</small>
            </article>
          </div>
          <button type="button" onClick={() => onNavigate('catalog')}>
            Каталог
          </button>
        </div>
      </section>

      <section className="about-section about-section--values">
        <div className="about-copy">
          <span>Почему мы</span>
          <h2>Мы закупаем семена и орехи у лучших фермеров.</h2>
          <p>
            Работа с локальными поставщиками помогает нам выбирать сырье с понятным происхождением
            и гарантировать стабильный вкус продукции.
          </p>
          <ul>
            <li>100% натуральная продукция</li>
            <li>Высокие стандарты качества</li>
            <li>Ответственное производство</li>
          </ul>
        </div>
        <div className="about-photo about-photo--green" aria-hidden="true" />
      </section>

      <section className="about-benefits">
        <article>
          <span>✓</span>
          <h3>Доступность</h3>
          <p>Честные условия и понятный ассортимент.</p>
        </article>
        <article>
          <span>♥</span>
          <h3>100% свежесть</h3>
          <p>Производство из отборного сырья.</p>
        </article>
        <article>
          <span>●</span>
          <h3>Поддержка</h3>
          <p>Помогаем клиентам и дилерам.</p>
        </article>
      </section>

      <section className="about-offers">
        <div className="about-offers__heading">
          <h2>Лучшие предложения месяца</h2>
          <button type="button" onClick={() => onNavigate('catalog')}>
            Смотреть все
          </button>
        </div>
        <div className="about-products">
          {products.map((product, index) => (
            <button className="about-product" type="button" onClick={() => onNavigate('catalog')} key={`${product}-${index}`}>
              <span>Масло</span>
              <div className="about-product__bottle" aria-hidden="true" />
              <strong>{product}</strong>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage
