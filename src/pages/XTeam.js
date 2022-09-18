import { useState, useEffect } from "react";
import axios from "axios"
import Loading from "../Components/Loading";
import TeamCard from "../Components/TeamCard";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
const XTeam = () => {

    //Instantiating useNavigate hook
    const navigate = useNavigate();

    const [TeamData, setTeam] = useState([]);

    //Array Contaning Exmembers
    const Xnames = ["Monika", "Pramod Seshasayanan P"]
    //Axios Get request
    const url = "https://ieeecspesu.herokuapp.com";
    useEffect(() => {
        axios.get(`${url}/coreteam`).then((res) => {

            setTeam(res.data);
            // console.log(res.data);
        });
    }, []);

    const checkXMembers = (obj) => {

        return Xnames.includes(obj.name);
    }
    const filter_Data = TeamData.filter(checkXMembers);
    console.log(filter_Data)
    // console.log(TeamData);
    const loading = [<div></div>, <Loading />, <div></div>];
    return (
        <div className="ex-members text-center pt-24 text-2xl md:text-4xl font-semibold  bg-gray-100 pb-16">
            <h1 className="font-extrabold text-green-700 text-center font-mono  mb-10">IEEE CS PESU <br /> <span className="underline text-orange-500">EX-TEAM MEMBERS</span></h1>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                {filter_Data && filter_Data.length === 0
                    ? loading.map((iii, i) => {
                        return (
                            <div className="mx-auto">
                                {i % 2 === 0 ? <div></div> : <Loading />}
                            </div>
                        );
                    })
                    : filter_Data.map((iii, i) => {
                        return <TeamCard data={iii} key={i} />;
                    })}

            </div>
            <button onClick={() => { navigate('/team') }} type="button" className="text-white bg-gradient-to-r
             from-purple-500 to-pink-500 hover:bg-gradient-to-l 
             focus:ring-4 focus:outline-none focus:ring-purple-200
              dark:focus:ring-purple-800 font-medium rounded-lg text-xl md:text-2xl
              px-6 py-1 mt-10 animate-bounce text-center mr-2 mb-10"><BsFillArrowLeftCircleFill className="inline h-7 w-7 m-3" /> Go Back</button>
        </div>
    );
}

export default XTeam;