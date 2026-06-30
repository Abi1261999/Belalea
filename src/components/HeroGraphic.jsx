import heroGraphic from '../assets/home-hero.svg'
import './HeroGraphic.css'

function HeroGraphic() {
  return (
    <section className="hero-graphic" aria-labelledby="hero-title">
      <img
        className="hero-graphic__image"
        src={heroGraphic}
        alt=""
        aria-hidden="true"
      />
      <div className="hero-graphic__content">
        <div className="hero-graphic__copy">
          <p className="hero-graphic__eyebrow">Натуральные продукты Belaléa</p>
          <h1 id="hero-title">Масла холодного отжима для здорового питания</h1>
          <p>
            Создаем нерафинированные масла, муку и жмых из отборных семян, сохраняя природную
            пользу, аромат и насыщенный вкус.
          </p>
          <div className="hero-graphic__actions">
            <a href="#catalog">Перейти в каталог</a>
            <a href="#dealers">Для дилеров</a>
          </div>
        </div>

        <div className="hero-graphic__showcase" aria-hidden="true">
          <div className="hero-graphic__bottle hero-graphic__bottle--large">
            <span />
          </div>
          <div className="hero-graphic__bottle hero-graphic__bottle--small">
            <span />
          </div>
          <div className="hero-graphic__seed hero-graphic__seed--one" />
          <div className="hero-graphic__seed hero-graphic__seed--two" />
          <div className="hero-graphic__seed hero-graphic__seed--three" />
        </div>
      </div>
    </section>
  )
}

export default HeroGraphic
