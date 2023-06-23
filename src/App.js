import React from "react";
import Footer from "./utils/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./utils/NavBar";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Test from "./utils/Test";
import EventFrames from "./Components/EventFrames";
import Error from "./Components/Error";
import Projects from "./Components/Projects";
import Spotlight from "./pages/Spotlight";
import Timeline from "./Components/Timeline";
import Stats from "./pages/Stats"
import RepoDetails from "./pages/RepoDetails"

AOS.init();


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:owner/:repo" element={<RepoDetails />}/>
          <Route path="/contact" element={<Home comp={"contact"} />} />
          <Route path="/team" element={<Home comp={"team"} />} />
          <Route path="/events" element={<EventFrames />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/eventtimeline" element={<Timeline />} />
          <Route path="/stats" element={<Stats />}/>
          
          {/*
            What I was thinking
          */}

          <Route path="/eve/:id" element={<Test />} />
          <Route path="*" element={<Error />} />

          <Route
            path="/spotlight"
            element={
              <Spotlight
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
