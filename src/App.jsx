import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import Showcase from "./components/Showcase"
import Performance from "./components/Performance"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <main>
        <Header/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </main>
    </>
  )
}

export default App
