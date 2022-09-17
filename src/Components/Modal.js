import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// init()
import Level1 from "../assets/events/init()/image1.png";
import Level2 from "../assets/events/init()/image6.png";
import Level3 from "../assets/events/init()/image3.png";
import Level4 from "../assets/events/init()/image4.png";
import Level5 from "../assets/events/init()/image5.png";
import Winners from "../assets/events/init()/image2.png";

// Code Of Chaos
import CodeOfChaos from "../assets/events/code-of-chaos/image2.png";
import Bhailang from "../assets/events/code-of-chaos/image4.png";
import ClashOfCode from "../assets/events/code-of-chaos/image6.png";
import BugRelay from "../assets/events/code-of-chaos/image5.png";
import Cero from "../assets/events/code-of-chaos/image1.png";
import Wheel from "../assets/events/code-of-chaos/image3.png";
import Team from "../assets/events/code-of-chaos/image7.png";

import Carousel from "./Carousel";

const Modal = (props) => {
  const name = props.title;
  const [modal, setModal] = useState(true);

  useEffect(() => {
    setModal(props.showModal);
    // eslint-disable-next-line
  }, [props.count]);

  const eventsArray = [
    {
      title: "init()",
      date: "March 2022",
      description: [
        // eslint-disable-next-line
        "init() was the first event IEEE CS hosted and it was a spectacular success!\n\
      It was an exhilarating offline treasure hunt with five intricately designed levels designed to confound participants and make them rack their brains in search for answers!\n\
      The aim of this event was to familiarise participants with the domains of computer science.\n\
      Clues and riddles were scattered throughout campus and on websites and submissions were collected via the CTFd platform.\n\
      Level 1 was a Wordle - based on the given clues, participants had to crack tech themed wordles, which would lead them to the next stage of the treasure hunt.\n",
        "Level 2 was a Data Science themed riddle and participants had to perform data wrangling to find the clue that led them to the next level.\n",
        "Level 3 was Web-Dev themed and had two stages. Firstly, participants had to find the link to the web app in the git commit history and secondly, had to edit CSS files to find a QR code which would divulge clues to aid them to move forward.\n",
        "Level 4’s theme was Computer Vision. Here, participants had to find the message hidden in a picture by filtering the colours.\n",
        // eslint-disable-next-line
        "Level 5 was Cryptography themed. Participants had to collect all the bytes and put them together based on endianness.\n\
      The resulting number allowed them to decrypt the file which contained the link to the final page. The first one to reach this page would be deemed the winner.",
        "The event was a huge success . The winners were awarded with exciting prizes and certificates of participation.",
      ],
      images: [Level1, Level2, Level3, Level4, Level5, Winners],
    },
    {
      title: "Code of Chaos",
      date: "April 2022",
      // Init pun
      description: [
        // eslint-disable-next-line
        " AT’22 was indeed one of the best weeks at our university! The IEEE CS team managed to conduct an event successfully! Here’s a recap of Code Of Chaos!\n\
      We presented the audience with a fun code arcade with neon lights, retro machines, and various games to choose from! Presenting to you the IEEE CS version of a game arcade!\n",
        "BHAI LANG :  The ever-popular Bhai is back. Teams competed in a game of wits within a 10-minute deadline and solved simple coding exercises!\n",
        "CLASH OF CODE : The teams solved puzzles in Fastest Mode, Shortest Code Mode, and Reverse Mode! This was an exciting way of competing in a world of puzzles!\n",
        "MEMORY TOKENS : This was a 6-minute version of Mahjong where players found the closest match to the token given to them!\n",
        "BUG RELAY : This was a challenging yet fun way of debugging the code within a span of 10-minutes!\n",
        // eslint-disable-next-line
        "The highlight of the event was when the teams got to spin the Wheel Of Fortune to win the power cards based on their performance!\n\
      They earned Codinero and invested in them to multiply their savings! That did sound like fun, isnt it?\n",
        "We truly had a lot of fun organizing this event for the students of our university! We look forward to many such events in the future.\n",
      ],
      images: [CodeOfChaos, Bhailang, ClashOfCode, Wheel, BugRelay, Cero, Team],
    },
  ];
  return (
    <>
      {modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-xl">
            <div
              className="modal fade fixed top-24 w-9/10 mx-12 md:w-3/4 h-full pb-12 outline-none overflow-x-hidden overflow-y-auto"
              role="dialog"
            >
              <div className="modal-dialog modal-xl relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-medium leading-normal text-gray-800">
                      {eventsArray.find((event) => event.title === name).title}
                    </h5>
                    <div className="flex items-center justify-end p-4">
                      <button
                        className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                        type="button"
                        onClick={() => setModal((modal) => !modal)}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </div>
                  </div>
                  <div className="modal-body relative p-4">
                    {/* Send images array to Carousel */}
                    <Carousel
                      images={
                        eventsArray.find((event) => event.title === name).images
                      }
                      descriptions={
                        eventsArray.find((event) => event.title === name)
                          .description
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
