import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

const Timeline = () => {
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-[#f1f5f9] h-auto">
        <VerticalTimeline lineColor="#9ca3af" className="">
          <VerticalTimelineElement
            className="vertical-timeline-element--work mr-4"
            contentStyle={{
              background: "#f1f5f9",
              //Neumorphism effect for the timeline
              borderRadius: "10px",
              boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
              marginTop: "10vh",
              cursor: "pointer",
              border: "1px solid black",
            }}
            contentArrowStyle={{ display: "none" }}
            date="March 2022"
            iconStyle={{ background: "#faa513", color: "#fff" }}
            onTimelineElementClick={() => {
              setTitle("init()");
              setCount((prev) => prev + 1);
              setModal(true);
            }}
            icon={<FontAwesomeIcon icon={faStar} />}
          >
            <h3 className="vertical-timeline-element-title">init()</h3>
            <p>Offline Treasure Hunt</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work mr-4"
            date="April 2022"
            iconStyle={{ background: "#202023", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faStar} />}
            contentStyle={{
              background: "#f1f5f9",
              //Neumorphism effect for the timeline
              borderRadius: "10px",
              boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
              border: "1px solid black",
              // cursor: "pointer",
            }}
            contentArrowStyle={{ display: "none" }}
          >
            <h3 className="vertical-timeline-element-title">Workshops</h3>
            <p>Introductory Workshops to get familiar with domains</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work mr-4"
            date="April 2022"
            iconStyle={{ background: "#faa513", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faStar} />}
            contentStyle={{
              background: "#f1f5f9",
              //Neumorphism effect for the timeline
              borderRadius: "10px",
              boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
              border: "1px solid black",
              cursor: "pointer",
            }}
            contentArrowStyle={{ display: "none" }}
            onTimelineElementClick={() => {
              setTitle("Code of Chaos");
              setCount((prev) => prev + 1);
              setModal(true);
            }}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Code Of Chaos
            </h4>
            <p>Flagship Code Arcade at AT'22</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work mr-4"
            date="June 2022 - July 2022"
            iconStyle={{ background: "#202023", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faStar} />}
            contentStyle={{
              background: "#f1f5f9",
              //Neumorphism effect for the timeline
              borderRadius: "10px",
              boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
              border: "1px solid black",
              cursor: "pointer",
            }}
            contentArrowStyle={{ display: "none" }}
            onTimelineElementClick={() => {
              window.location.href = "/projects";
            }}
          >
            <h3 className="vertical-timeline-element-title">Summer Projects</h3>
            <p>Summer Internship </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "#faa513", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faStar} />}
          />
        </VerticalTimeline>
        <hr className="border border-[#292a2d] my-[-0.125rem]" />
        {modal && <Modal title={title} showModal={modal} count={count} />}
      </div>
    </>
  );
};

export default Timeline;
