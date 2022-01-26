import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.globe.min";

function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
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
          // color: 0xf8a219,
          // backgroundColor: 0x202023,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div
        ref={myRef}
        className="h-full z-10 flex flex-col-reverse md:flex-row md:w-full pt-24"
      >
        <div className="md:basis-1/2 basis-1/2 grid md:place-items-center ttt w-full">
          <div className="md:ml-64 mx-5">
            <h1 className="text-white md:text-8xl text-6xl">
              IEEE <br />
              Computer Society
            </h1>
            <h2 className="text-[#f8a219] md:text-4xl pt-6 text-2xl">
              PES University Student Branch Chapter
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
