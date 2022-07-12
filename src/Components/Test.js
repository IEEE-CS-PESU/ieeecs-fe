import { useEffect } from "react";
import { useState } from "react";
import {
    useParams,
    useNavigate
} from "react-router-dom";

import pic from '../assets/pic.jpg'
import Template from "./Template";
// import styles from 'test/module.css'
const Test = () => {

    //Hooks Instantiation
    let { id } = useParams();
    const navigate = useNavigate();

    const [currPage, setPage] = useState("");
    useEffect(() => {
        setPage(id);
    }, [id])




    const data = {

        Inaug: ["Register Now!", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        PrevEvents: ["Previous Events", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        UpcomEvents: ["Upcoming Events", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        Community: ["Community", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        spotlight: ["Spotlight", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        Recruits: ["Recruitment", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],
        Projects: ["Projects", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, tempore officia! Dicta rerum quidem enim, voluptatum quos vitae consectetur totam tempora commodi? Laboriosam distinctio eveniet, quis ea at eaque accusamus ab porro ullam fugiat. Fugiat, optio perspiciatis delectus debitis illo id in cupiditate ducimus! Minima ab dolor facilis aperiam labore.", [pic, pic, pic, pic, pic, pic, pic, pic, pic, pic]],

    };

    return (
        <div className="pt-28 text-center">


            <Template Title={data[id][0]} desc={data[id][1]} imgList={data[id][2]} />

            <button className="test-btn text-white text-sm md:text-lg mt-10 animate-bounce p-2 md:p-3 rounded-lg bg-yellow-400 font-bold uppercase" onClick={() => {
                navigate('/events')
            }

            }> Go back to events </button>
        </div>
    );
}

export default Test;