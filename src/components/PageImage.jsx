import pageImage from '../assets/belalea-page.jpg'
import './PageImage.css'

function PageImage() {
  return (
    <main className="page-image" aria-label="Belaléa homepage design">
      <img
        className="page-image__asset"
        src={pageImage}
        alt="Belaléa homepage with oils and flour from farm ingredients"
        width="1920"
        height="10929"
      />
    </main>
  )
}

export default PageImage
