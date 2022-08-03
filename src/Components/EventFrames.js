import React, { Suspense, useEffect } from "react";
import Model from "../models/Model";
import HeroLoad from "./HeroLoad";
import im1 from "../assets/eventPosters/1.jpg";
import im2 from "../assets/eventPosters/2.jpg";
import im3 from "../assets/eventPosters/3.jpg";
import im4 from "../assets/eventPosters/4.jpg";
import im5 from "../assets/eventPosters/5.jpg";
import im6 from "../assets/eventPosters/6.jpg";
import im7 from "../assets/eventPosters/7.jpg";

const images = [
  // Front
  {
    position: [0, -0.25, 1.5],
    rotation: [0, 0, 0],
    tex: 0,
    url: "CurrentEvent",
    but: "Register Now",
    img: im4
  },
  // Back
  {
    position: [-0.95, -0.25, -0.6],
    rotation: [0, 0, 0],
    tex: 1,
    url: "PreviousEvents",
    but: "Explore",
    img: im3
  },
  {
    position: [0.95, -0.25, -0.6],
    rotation: [0, 0, 0],
    tex: 2,
    url: "UpcomingEvents",
    but: "Explore",
    img: im5
  },
  // Left
  {
    position: [-1.8,-0.25, 0.3],
    rotation: [0, Math.PI / 3, 0],
    tex: 3,
    url: "Community",
    but: "Join",
    img: im2
  },
  {
    position: [-2.15, -0.25, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    tex: 4,
    

    url: "Projects",
    but: "Explore",
    img: im7
  },

  // Right
  {
    position: [1.8, -0.25, 0.3],
    rotation: [0, -Math.PI / 3, 0],
    tex: 5,
    url: "Recruitment",
    but: "Join Us",
    img: im6
  },
  {
    position: [2.15, -0.25, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    tex: 6,
    url: "Spotlight",
    but: "Check Out",
    img: im1
  },
];

const Events = () => {
  useEffect(() => {
    // window.location ='/events' 
    console.log("hello ")
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-black text-4xl w-full h-full pt-20">
        {/* fallback --> Components of looading */}
        <Suspense fallback={<HeroLoad />}>
          <Model images={images} />
        </Suspense>
      </div>
    </>
  );
};

export default Events;
