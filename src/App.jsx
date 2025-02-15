import AboutUs from "./components/about/about"
import Planes from "./components/planos/Planes"
import Equipe from "./components/equipe/equipe"
import Footer from "./components/footer/footer"
import Home from "./components/home/home"
import Portfolio from "./components/portfolio/Portfolio"
import Servicos from "./components/services/servicos"
import Carousel from "./components/carousel/Carousel"


function App() {

  return (
    <>
      <Home />
      <Carousel />
      <AboutUs />
      <Servicos />
      {/* <Portfolio /> */}
      <Equipe />
      <Planes />
      <Footer />
    </>
  )
}

export default App
