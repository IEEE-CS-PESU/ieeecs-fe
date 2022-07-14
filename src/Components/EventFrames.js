import React, { Suspense, useEffect } from "react";
import Model from "../models/Model";


const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    tex: 0,
    url: "Inauguration",
    but: "Register Now",
  },
  // Back
  {
    position: [-0.9, 0, -0.6],
    rotation: [0, 0, 0],
    tex: 1,
    url: "PreviousEvents",
    but: "Explore",
  },
  {
    position: [0.9, 0, -0.6],
    rotation: [0, 0, 0],
    tex: 2,
    url: "UpcomingEvents",
    but: "Explore",
  },
  // Left
  {
    position: [-1.65, 0, 0.25],
    rotation: [0, Math.PI / 3, 0],
    tex: 3,
    url: "Community",
    but: "Join",
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    tex: 4,
    url: "Spotlight",
    but: "Check Out",
  },

  // Right
  {
    position: [1.65, 0, 0.25],
    rotation: [0, -Math.PI / 3, 0],
    tex: 5,
    url: "Recruitment",
    but: "Join Us",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    tex: 6,
    url: "Projects",
    but: "Explore",
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
        <Suspense fallback={<h1 className="text-white">loading</h1>}>
          <Model images={images} />
        </Suspense>
      </div>
    </>
  );
};

export default Events;
