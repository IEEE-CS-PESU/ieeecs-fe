import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Home";
import Events from "./Events";
// import Spotlight from "./Spotlight";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Home comp={'contact'}/>} />
          <Route path="/team" element={<Home comp={'team'}/>} />
          <Route path="/events" element={<Events />} />      
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
