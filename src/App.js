import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
