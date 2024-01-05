import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/resume" element={<Resume />}/>
        <Route exact path="/portfolio" element={<Portfolio />}/>
        <Route exact path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
