import React from "react";
// import * as fireBase from "firebase/app"
// import { firebaseConfig } from "./firebase_config"
import Footer from "./utils/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./utils/NavBar";
import Home from "./pages/Home";
// import Events from "./Events";
// import InstaFeed from "./Components/InstaFeed";
import AOS from "aos";
import "aos/dist/aos.css";
// import Timeline from "./Components/Timeline";
import Test from "./utils/Test";
import EventFrames from './Components/EventFrames'
// import Coc from "./Components/COC";
// import Template from "./Components/Template";
import Error from "./Components/Error";
import Projects from "./Components/Projects";
import Spotlight from "./pages/Spotlight";

AOS.init();


//Firebase Analytics
// fireBase.initializeApp(firebaseConfig)
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
          <Route path="/projects" element={<Projects />} />

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
