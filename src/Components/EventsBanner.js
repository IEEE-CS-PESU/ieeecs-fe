import React from "react";
// import { NavLink } from "react-router-dom";

const EventsBanner = () => {
  return (
    <>
      <div className="h-96 text-white bg-[#202023] grid place-content-center eve">
        <p className="text-3xl md:text-5xl text-center font-serif leading-[40px]">
          Technology is best when it brings people together.
        </p>
        <div className="w-full text-center pt-12">
          {/* <NavLink to="/events" className="text-xl bg-[#f8a219] hover:bg-[#ffb53f] text-white font-bold py-5 px-10 rounded">
            Explore Events
          </NavLink> */}
          <a
            href="https://codeofchaos.ieeecspesu.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl bg-[#f8a219] hover:bg-[#ffb53f] text-white font-bold py-5 px-10 rounded"
          >
            Explore Events
          </a>
        </div>
      </div>
    </>
  );
};

export default EventsBanner;
