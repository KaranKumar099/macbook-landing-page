import Header from "./components/Header"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import Showcase from "./components/Showcase"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <main>
        <Header/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
      </main>
    </>
  )
}

export default App
