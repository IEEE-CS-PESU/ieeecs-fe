import React, { useRef, useEffect } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import Team from "./Components/Team";
import Contact from "./Components/Contact";

const Home = (props) => {
  const contactRef = useRef();
  const teamRef = useRef();

  useEffect(() => {
    if (props.comp === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (props.comp === "team") {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [props]);
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Team ref={teamRef} />
      <Contact ref={contactRef} />
    </>
  );
};

export default Home;
