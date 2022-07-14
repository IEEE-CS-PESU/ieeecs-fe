import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <div className="bg-[#f1f5f9] h-auto">
      <VerticalTimeline lineColor="#9ca3af">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#faa513",
            color: "#202023",
            cursor: "pointer",
            marginTop: "10vh",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
          contentArrowStyle={{ borderRight: "7px solid #faa513" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          onTimelineElementClick={() => alert("I am a work experience")}
          icon={<FontAwesomeIcon icon={faStar} />}
        >
          <h3 className="vertical-timeline-element-title">Code Of Chaos</h3>
          <h4 className="vertical-timeline-element-subtitle">
            PES University, Bangalore
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
          contentStyle={{
            background: "#f1f5f9",
            //Neumorphism effect for the timeline
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #f1f5f9" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
          contentStyle={{
            background: "#f1f5f9",
            //Neumorphism effect for the timeline
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #f1f5f9" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
          contentStyle={{
            background: "#f1f5f9",
            //Neumorphism effect for the timeline
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #f1f5f9",
            boxShadow: "5px 5px 10px #ffffff",
          }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
          contentStyle={{
            background: "#f1f5f9",
            //Neumorphism effect for the timeline
            borderRadius: "10px",
            boxShadow: "5px 5px 10px #b7babd, -5px -5px 10px #ffffff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #f1f5f9" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faStar} />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
