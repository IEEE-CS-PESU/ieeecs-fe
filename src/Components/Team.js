import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
import EventsBanner from "./EventsBanner";
import Loading from "./Loading";

const Team = React.forwardRef((props, ref) => {
  const [TeamData, setTeam] = useState([]);
  const url = "https://ieeecspesu.herokuapp.com";
  useEffect(() => {
    axios.get(`${url}/coreteam`).then((res) => {
      // console.log(res.data)
      setTeam(res.data);
      // console.log(res.data);
    });
  }, []);

  const loading = [<div></div>, <Loading />, <div></div>];

  return (
    <>
      <div ref={ref} className="h-auto bg-slate-100">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 pb-12 md:pb-24 pt-0">
          <div data-aos="fade-up" className="flex flex-col items-center">
            <span className="text-gray-200">
              <div className="md:text-[150px] text-[125px]">100001</div>
            </span>
            <p className="text-[#000000] font-sans md:text-7xl text-5xl relative top-[-115px] md:top-[-150px]">
              Our Team
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {TeamData && TeamData.length === 0
              ? loading.map((iii, i) => {
                  return (
                    <div className="mx-auto">
                      {i % 2 === 0 ? <div></div> : <Loading />}
                    </div>
                  );
                })
              : TeamData.map((iii, i) => {
                  return <TeamCard data={iii} key={i} />;
                })}
          </div>
        </section>
      </div>
      <EventsBanner />
    </>
  );
});

export default Team;
