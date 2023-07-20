import "./App.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
