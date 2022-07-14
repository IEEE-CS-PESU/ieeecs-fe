import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navi = useNavigate();


    useEffect(() => {

        let path = ["/events/Spotlight", "/events/Community", "/events/PreviousEvents", "/events/Inauguration", "/events/UpcomingEvents",
            "/events/Recruitment", "/events/Projects"]
        if (path.includes(window.location.pathname)) {
            navi('/events');
        }

    }, [navi])

    return (
        <div className="text-8xl pt-44 text-white">

            404 !!!!
        </div>
    );
}

export default Error;