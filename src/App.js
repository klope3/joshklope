import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo-jk">
            <svg version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
                <path d="m97.874 0.55381-25.162 25.162v50.544l25.162-25.161zm60.291 75.172-47.991 47.991v29.621l71.233 71.233 17.791-17.795-68.253-68.249 45.016-45.011zm-60.291 0.27958-25.162 25.163v146.46c0 13.2-10.429 23.634-23.629 23.634-13.2 0-23.629-10.434-23.629-23.634h-25.162c0 26.799 21.993 48.796 48.791 48.796 26.799 0 48.791-21.998 48.791-48.796z" color="currentColor"/>
            </svg>
        </div>
        <Navbar />
      </header>
      {/* <div className="bg-hex"></div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
