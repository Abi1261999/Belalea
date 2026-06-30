import Header from './components/Header'
import HeroGraphic from './components/HeroGraphic'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <HeroGraphic />
      <main className="app__main">
        <h1 className="app__title">Добро пожаловать в Belaléa</h1>
        <p className="app__subtitle">Натуральная косметика и уход за кожей</p>
      </main>
    </div>
  )
}

export default App
