import AboutUs from "./components/AboutUs"
import Comp from "./components/Comp"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Press from "./components/Press"
import Products from "./components/Products"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Press />
      <Comp />
    </div>
  )
}

export default App