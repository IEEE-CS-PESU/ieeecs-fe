import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { EventFrames, Projects, Timeline, Error } from "./Components"
import { NavBar, Footer, Test } from "./utils"
import { Home, Spotlight } from "./pages";

// import * as fireBase from "firebase/app"
// import { firebaseConfig } from "./firebase_config"
// import Events from "./Events";
// import InstaFeed from "./Components/InstaFeed";
// import Timeline from "./Components/Timeline";
// import Coc from "./Components/COC";
// import Template from "./Components/Template";

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
          <Route path="/eventtimeline" element={<Timeline />} />

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
