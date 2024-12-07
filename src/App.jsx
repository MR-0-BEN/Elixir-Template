import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  // add AOS
  useEffect(() => {
    // Initialize AOS (Animate on scroll)
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    // Optional: Refresh AOS when component updates
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Reviews />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
