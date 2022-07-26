import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.waves.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const Projects = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      window.scrollTo(0,0)
      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x050505,
            shininess: 60.0,
            waveHeight: 17.5,
            zoom: 0.65,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);

    return (
        <>
          <div ref={myRef} className="bg-black h-auto pt-24 text-white text-4xl">
            <div className="bg-home px-8 w-full">
              <div
                className="
                        py-12
                        flex flex-col
                        justify-between
                        min-h-screen
                        md:max-w-2xl
                        lg:max-w-3xl
                        mx-auto
                    "
              >
                <div>
                  <div className="mt-12 text-white text-center">
                    <h1 className="font-bold text-5xl md:text-7xl">
                    Projects will go live soon...
                    </h1>
                    <h3 className="pt-8">Check this space on <span className="text-[#f8a219]">August 5th</span></h3>
                    <p className="pt-10 text-lg md:text-2xl">We are almost there!</p>
                    <p className="pt-2 text-lg md:text-2xl">
                    We're getting ready to launch our projects and are excited for you to check them out. Meanwhile
                      follow us on social media or contact us via email.
                    </p>
                  </div>
                  <div className="flex justify-center mt-9">
                    <a href="https://instagram.com/ieee.cs.pesu" className="pr-10 hover:text-[#f8a219]">
                      <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ieee-cs-pesu/"
                    
                      className="pr-10 hover:text-[#f8a219]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" />
                    </a>
                    <a href="mailto:ieee.cs.rr@pes.edu" className="hover:text-[#f8a219]">
                      <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
                    </a>
                  </div>
                  <div className="w-full text-center pt-12">
              <NavLink to="/contact" className="text-xl bg-[#f8a219] hover:bg-[#ffb53f] text-white font-bold py-5 px-10 rounded">
                Contact Us
              </NavLink>
            </div>
                </div>
              </div>
            </div>
            </div>
     </>
   );}

   export default Projects;