import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import NET from "vanta/dist/vanta.waves.min";

const Work = () => {
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
          color: 0x050505,
          shininess: 60.0,
          waveHeight: 17.5,
          zoom: 0.65,
          // backgroundColor: '#202023',
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className="border-gray-500 border-t-[2px] border-dashed" />
      <div ref={myRef} className="h-auto pb-28 bg-[#202023]">
        <div className="flex flex-col pt-7">
          <div data-aos="fade-up"  className="flex flex-col items-center">
            <span className="text-gray-500">
              <FontAwesomeIcon
                icon={faCode}
                className="md:text-[220px] text-[170px]"
              />
            </span>
            <p className="text-[#ffffff] font-sans md:text-7xl text-5xl relative top-[-110px] md:top-[-150px]">
              Our Objective
            </p>
          </div>
          <div data-aos="fade-up" className="flex justify-center w-full relative top-[-30px] md:top-[-50px]">
            <p className="text-center px-5 md:px-0 md:w-2/3 text-white md:leading-8 font-mono md:text-xl ">
              Inculcate a research oriented environment in Computer Science,
              Electronics &amp; Communication, Electrical &amp; Electronics Engineering,
              Mechanical Engineering, Bio Technology etc. and also to take up
              the projects which are inter disciplinary wherein students are
              mentored on various domains through projects and workshops.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-2 gap-y-8 lg:grid-cols-3 w-full lg:grid-rows-2 md:w-3/5 md:gap-y-12">
                <div data-aos="flip-right" data-aos-delay="200" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets3.lottiefiles.com/packages/lf20_lln7m43m.json"
                      background="transparent"
                      speed="1"
                      // style={{height: "30px" }}
                      className="h-48"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>Software Development</p>
                  </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets8.lottiefiles.com/temp/lf20_3bpCnZ.json"
                      background="transparent"
                      speed="1"
                      // style={{ width: "300px", height: "300px" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>Artificial Intelligence</p>
                  </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json"
                      background="transparent"
                      speed="1"
                      // style={{height: "30px" }}
                      className="h-full"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>Data Science</p>
                  </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets5.lottiefiles.com/packages/lf20_n8ys1tsg.json"
                      background="transparent"
                      speed="1"
                      // style={{height: "30px" }}
                      className="h-full"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>Cyber Security</p>
                  </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets8.lottiefiles.com/packages/lf20_vsg5kswn.json"
                      background="transparent"
                      speed="1"
                      // style={{height: "30px" }}
                      className="h-full"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>System Core</p>
                  </div>
                </div>

                <div data-aos="flip-right" data-aos-delay="100" className="flex flex-col items-center">
                  <div className="md:h-40 md:w-40 h-40 w-40 bg-slate-50 rounded-lg">
                    <lottie-player
                      src="https://assets10.lottiefiles.com/packages/lf20_9azkhcpb.json"
                      background="transparent"
                      speed="1"
                      // style={{height: "30px" }}
                      className="h-full"
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <div className="w-36 text-center text-lg md:text-xl pt-3 text-white">
                    <p>Robotics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
