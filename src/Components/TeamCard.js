import React from "react";

const TeamCard = (props) => {
    // const dr = 'https://drive.google.com/uc?export=view&id='+props.data.img
  return (
    <>
      <div data-aos="fade-in" data-aos-delay="50" className="md:w-72 mx-auto  rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <img
            className="object-center object-fill md:h-72 md:w-72 h-40 w-40 rounded-full md:rounded-full"
            src={props.data.img}
            alt="v"
            referrerpolicy="no-referrer"
          ></img>
        </div>
        <div className="text-center py-3 md:py-6">
          <p className="text-xl md:text-2xl text-gray-700 font-bold mb-1">{props.data.name}</p>
          <p className="text-base md:text-lg text-gray-500 font-normal">
            {props.data.role}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
