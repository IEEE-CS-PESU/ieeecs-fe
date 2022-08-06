import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard(props) {
  return (
    <div>
      <div className="rounded-xl border p-5 shadow-md w-full mb-12 bg-white mx-auto">
        <div className="flex items-center space-x-4">
          <button className="rounded-2xl w-24 border bg-gradient-to-r from-sky-500 to-indigo-500 px-3 py-1 text-sm font-semibold">
            {props.content["domain"]}
          </button>
          <div className="flex w-full items-center justify-evenly border-b pb-3">
            <div className="flex items-center space-x-3">
              {/* <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
              <div className="text-xl-2 font-bold text-slate-700">
                {props.content["title"]}
              </div>
            </div>
          </div>

          {/* <div className="text-xs text-neutral-500">2 hours ago</div> */}
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 text-base font-medium italic font-sans text-gray-800">
            By {props.content["team"]}
          </div>
          <div className="text-lg text-neutral-800 font-sans">
            {props.content["description"]}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-slate-500">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <a
                  href={props.content["link"]}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    transform="shrink-4"
                    swapOpacity
                    shake
                  />
                  &nbsp;<p className="text-lg">Source Code</p>
                </a>
              </div>

              <div className="flex cursor-pointer items-center transition hover:text-slate-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
