import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import DogModel from "../models/DogModel";

const About = () => {
  return (
    <>
      <div className="border-gray-500 border-t-[2px] border-dashed" />

      <div className="bg-slate-50 min-h-full h-auto flex flex-col md:flex-row md:w-full pt-5 md:pb-24">
        <div className="grid place-content-center basis-3/5 pt-0 md:pt-0">
          <div data-aos="fade-in" className="flex flex-col items-center">
            <span className="text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="relative md:h-60 h-48"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 7H7v6h6V7z" />
                <path
                  fillRule="evenodd"
                  d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p className="md:text-8xl text-6xl relative top-[-130px] md:top-[-180px]">
              About Us
            </p>
          </div>

          <div data-aos="fade-up-right" data-aos-delay="100" className="md:w-4/5 md:basis-2/5 basis-1/2 mx-5 md:ml-24 ">
            <div className="rounded-t-xl bg-gray-300 flex h-12 items-center w-full border-b-2 border-gray-400 shadow-sm">
              <div className="pl-5 grid grid-cols-3 w-32">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-red-500 text-lg"
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-yellow-500 text-lg"
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-green-500 text-lg"
                />
              </div>
            </div>
            <div className="px-4 md:px-10 py-6 bg-white h-auto rounded-b-2xl border-b-2 border-x-2 shadow-lg">
              <div className="font-bold mb-6 text-3xl md:text-5xl">
                Computer Society
              </div>
              <p className="text-gray-700 md:text-[20px] text-[15px] font-[Helvetica] md:leading-9 text-center">
                <span>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-black text-3xl"
                  />
                </span>{" "}
                &nbsp; <span className="justify-left"> The IEEE Computer Society brings together like-minded individuals across the world from various branches
of engineering through seminars and publications to discuss and contribute to the expansive domains of Computer Science.
IEEE CS encourages aspiring students and professionals by delivering tools to aid them at every stage and ensure continuous learning.
The standard for education and engagement set by IEEE CS is like none other. IEEE CS  inspires advancements in the theory, design, practice, and application of computer and information-processing science and technology
</span>
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up-left" data-aos-delay="100" className="md:basis-3/5 basis-1/2 grid place-items-center text-9xl md:text-9xl text-[#f8a219]">
          <DogModel />
        </div>
      </div>
    </>
  );
};

export default About;
