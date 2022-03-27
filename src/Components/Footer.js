import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="h-auto text-white bg-[#202023]">
        <footer className="text-center bg-[#202023] text-white">
          <div className="container min-w-full pt-6">
            <div className="flex justify-center mb-6">
              <a
                href="https://instagram.com/ieee.cs.pesu"
                
                className="pr-10"
                target='_blank'
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/ieee-cs-pesu/"
                
                className="pr-10"
                target='_blank'
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" />
              </a>
              <a
                href="mailto:ieee.cs.rr@pes.edu"
                
                className=""
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
              </a>
            </div>
          </div>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright &nbsp;
            <span className="text-[#f8a219]">
              IEEE CS PESU
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
