import React from "react";

const TeamCard = (props) => {
    // const dr = 'https://drive.google.com/uc?export=view&id='+props.data.img
  return (
    <>
      <div data-aos="fade-in" data-aos-delay="50" className="md:w-72 mx-auto bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <img
            className="object-center object-fill h-72 w-72"
            src={props.data.img}
            alt="v"
            referrerpolicy="no-referrer"
          ></img>
        </div>
        <div className="text-center py-8 sm:py-6">
          <p className="text-2xl text-gray-700 font-bold mb-2">{props.data.name}</p>
          <p className="text-lg text-gray-500 font-normal">
            {props.data.role}
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
