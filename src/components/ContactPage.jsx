import { useState } from 'react'
import footerImage from '../assets/footer-section.jpg'
import logo from '../assets/logo.svg'
import newsletterImage from '../assets/newsletter-section.jpg'
import './ContactPage.css'

const initialForm = {
  name: '',
  email: '',
  company: '',
  topic: '',
  message: '',
  newsletter: '',
}

function ContactPage({ onNavigate }) {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleContactSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault()
    window.location.href = 'mailto:needhelp@organia.com?subject=Belal%C3%A9a%20newsletter'
  }

  return (
    <main className="contact-page">
      <header className="contact-header">
        <button className="contact-header__logo" type="button" onClick={() => onNavigate('top')}>
          <img src={logo} alt="Belaléa" />
        </button>

        <nav className="contact-header__nav" aria-label="Основная навигация">
          <button type="button" onClick={() => onNavigate('about-page')}>О нас</button>
          <button type="button" onClick={() => onNavigate('shop-page')}>Каталог</button>
          <button type="button" onClick={() => onNavigate('top')}>Дилерам</button>
          <button type="button" onClick={() => onNavigate('blog-page')}>Новости</button>
        </nav>

        <form className="contact-header__search" onSubmit={(event) => {
          event.preventDefault()
          onNavigate('shop-page')
        }}>
          <input type="search" placeholder="Поиск..." aria-label="Поиск по каталогу" />
          <button type="submit" aria-label="Найти">⌕</button>
        </form>

        <button className="contact-header__contact" type="button" onClick={() => onNavigate('contacts')}>
          Контакты
        </button>
      </header>

      <section className="contact-hero">
        <div className="contact-hero__fruit contact-hero__fruit--left" aria-hidden="true" />
        <h1>Контакты</h1>
        <div className="contact-hero__fruit contact-hero__fruit--right" aria-hidden="true" />
      </section>

      <section className="contact-intro">
        <div className="contact-intro__image" aria-hidden="true">
          <span />
        </div>
        <div className="contact-intro__content">
          <h2>Мы с удовольствием поговорим о том, как мы можем работать вместе.</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s.
          </p>
          <div className="contact-methods">
            <a href="mailto:support@belalea.by">
              <span>✉</span>
              <strong>Сообщение</strong>
              <small>support@belalea.by</small>
            </a>
            <a href="tel:+375297897895">
              <span>☏</span>
              <strong>Звонок</strong>
              <small>+375 (29) 789 789 5</small>
            </a>
          </div>
          <div className="contact-socials">
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">t</a>
            <a href="#pinterest" aria-label="Pinterest">p</a>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__card">
          <span>Где мы ?</span>
          <h2>Наш адрес</h2>
          <p>Мы находимся в самом экологически чистом районе Беларуси.</p>
          <a href="https://maps.google.com/?q=Kletsk" target="_blank" rel="noreferrer">
            <strong>Офис:</strong>
            г.Клецк, ул. Аветисова
          </a>
          <a href="https://maps.google.com/?q=Kletsk" target="_blank" rel="noreferrer">
            <strong>Производство:</strong>
            г.Клецк, ул. Нагдаляна
          </a>
        </div>
      </section>

      <form className="contact-form" onSubmit={handleContactSubmit}>
        <label>
          <span>Как вас зовут*</span>
          <input name="name" value={form.name} onChange={updateField} placeholder="Ирина, Денис, Елена" required />
        </label>
        <label>
          <span>Ваша почта*</span>
          <input name="email" type="email" value={form.email} onChange={updateField} placeholder="example@yourmail.com" required />
        </label>
        <label>
          <span>Компания</span>
          <input name="company" value={form.company} onChange={updateField} placeholder="Название вашей компании" />
        </label>
        <label>
          <span>Тема обращения*</span>
          <input name="topic" value={form.topic} onChange={updateField} placeholder="Напишите ваше предложение или вопрос" required />
        </label>
        <label className="contact-form__message">
          <span>Сообщение*</span>
          <textarea name="message" value={form.message} onChange={updateField} placeholder="Не забудьте поздороваться :)" required />
        </label>
        <button type="submit">Отправить</button>
        {sent && <p className="contact-form__status">Спасибо! Сообщение подготовлено к отправке.</p>}
      </form>

      <section className="contact-newsletter">
        <img src={newsletterImage} alt="Узнайте первыми о новых акциях" />
        <form onSubmit={handleNewsletterSubmit}>
          <input
            name="newsletter"
            type="email"
            value={form.newsletter}
            onChange={updateField}
            placeholder="Введите ваш e-mail адрес"
            aria-label="Email для подписки"
          />
          <button type="submit">Подписаться</button>
        </form>
      </section>

      <footer className="contact-footer">
        <img src={footerImage} alt="Belaléa footer" />
        <a className="contact-footer__email" href="mailto:needhelp@organia.com">Email</a>
        <a className="contact-footer__phone" href="tel:666888888">Phone</a>
        <button className="contact-footer__logo" type="button" onClick={() => onNavigate('top')}>Belaléa</button>
        <a className="contact-footer__ig" href="#instagram" aria-label="Instagram">Instagram</a>
        <a className="contact-footer__fb" href="#facebook" aria-label="Facebook">Facebook</a>
        <a className="contact-footer__tw" href="#twitter" aria-label="Twitter">Twitter</a>
        <a className="contact-footer__pin" href="#pinterest" aria-label="Pinterest">Pinterest</a>
      </footer>
    </main>
  )
}

export default ContactPage
