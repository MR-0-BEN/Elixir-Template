import "./App.css";
import About from "./components/About";
import Counter from "./components/Counter";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Reviews />
      <Team/>
    </div>
  );
}

export default App;
