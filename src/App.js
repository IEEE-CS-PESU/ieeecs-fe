import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Home";
import Events from "./Events";
import InstaFeed from "./Components/InstaFeed";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./Components/Timeline";
import Test from "./Components/Outerevents";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Home comp={"contact"} />} />
          <Route path="/team" element={<Home comp={"team"} />} />
          <Route path="/events" element={<Timeline />} />
          <Route
            path="/spotlight"
            element={
              <InstaFeed
                token={process.env.REACT_APP_ACCESS_TOKEN}
                limit={30}
              />
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
