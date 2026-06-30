import heroGraphic from '../assets/home-hero.svg'
import './HeroGraphic.css'

function HeroGraphic() {
  return (
    <section className="hero-graphic" aria-label="Belaléa homepage visual">
      <img
        className="hero-graphic__image"
        src={heroGraphic}
        alt=""
        aria-hidden="true"
      />
    </section>
  )
}

export default HeroGraphic
