import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar"; 
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
