
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageDemo from "./components/ImageDemo";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/ImageDemo" element={<ImageDemo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
