import { useState } from 'react'
import contactBanner from '../assets/contact-banner.jpg'
import contactFormImage from '../assets/contact-form-section.jpg'
import contactIntro from '../assets/contact-intro-section.jpg'
import contactMap from '../assets/contact-map-section.jpg'
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
        <img src={contactBanner} alt="Контакты" />
      </section>

      <section className="contact-intro">
        <img src={contactIntro} alt="Contact Belaléa support and phone" />
        <a className="contact-intro__email" href="mailto:support@belalea.by">Email</a>
        <a className="contact-intro__phone" href="tel:+375297897895">Phone</a>
        <a className="contact-intro__instagram" href="#instagram" aria-label="Instagram">Instagram</a>
        <a className="contact-intro__facebook" href="#facebook" aria-label="Facebook">Facebook</a>
        <a className="contact-intro__twitter" href="#twitter" aria-label="Twitter">Twitter</a>
        <a className="contact-intro__pinterest" href="#pinterest" aria-label="Pinterest">Pinterest</a>
      </section>

      <section className="contact-map">
        <img src={contactMap} alt="Belaléa address map section" />
        <a className="contact-map__office" href="https://maps.google.com/?q=Kletsk%20Avesitova" target="_blank" rel="noreferrer">Офис</a>
        <a className="contact-map__production" href="https://maps.google.com/?q=Kletsk%20Nagdaliana" target="_blank" rel="noreferrer">Производство</a>
      </section>

      <section className="contact-form">
        <img src={contactFormImage} alt="Форма обратной связи" />
        <form className="contact-form__overlay" onSubmit={handleContactSubmit}>
          <input className="contact-form__name" name="name" value={form.name} onChange={updateField} placeholder="Ирина, Денис, Елена" aria-label="Как вас зовут" required />
          <input className="contact-form__email" name="email" type="email" value={form.email} onChange={updateField} placeholder="example@yourmail.com" aria-label="Ваша почта" required />
          <input className="contact-form__company" name="company" value={form.company} onChange={updateField} placeholder="Название вашей компании" aria-label="Компания" />
          <input className="contact-form__topic" name="topic" value={form.topic} onChange={updateField} placeholder="Напишите ваше предложение или вопрос" aria-label="Тема обращения" required />
          <textarea className="contact-form__message" name="message" value={form.message} onChange={updateField} placeholder="Не забудьте поздороваться :)" aria-label="Сообщение" required />
          <button className="contact-form__submit" type="submit" aria-label="Отправить">Отправить</button>
        </form>
        {sent && <p className="contact-form__status">Спасибо! Сообщение подготовлено к отправке.</p>}
      </section>

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
