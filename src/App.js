import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Home";
// import Events from "./Events";
import InstaFeed from "./Components/InstaFeed";
import AOS from "aos";
import "aos/dist/aos.css";
// import Timeline from "./Components/Timeline";
import Test from "./Components/Test";
import EventFrames from './Components/EventFrames'
// import Coc from "./Components/COC";
// import Template from "./Components/Template";
import Error from "./Components/Error";
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
          <Route path="/events" element={<EventFrames />} />
          {/*
            What I was thinking
          */}

          <Route path="/eve/:id" element={<Test />} />
          <Route path="*" element={<Error />} />

          <Route
            path="/spotlight"
            element={
              <InstaFeed
                token={process.env.REACT_APP_ACCESS_TOKEN}
                limit={30}
              />
            }
          />
          {/* <Route path="/events/prev" element={<Template />} />
         
          {/* <Route path="/events" element={<Events />} /> */}
          {/* ----------Test Route for Testing Components Here */}
          {/* <Route path="/test" element={<HeroLoad />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
