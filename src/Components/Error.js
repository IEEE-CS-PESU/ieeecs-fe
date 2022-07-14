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
        <div className="wrapper">
            <div className="bg-error">
                <div className="text-center bg-[#FF991F]">
                    <div className="pt-36 pb-6 font-black text-3xl text-gray-200">Sorry, We can't find that Page</div>


                    <button type="button" onClick={() => navi('/')} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 
                    focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg
                     shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg '
                     text-lg px-5 py-2.5 text-center mr-2 mb-2 ">Go Back</button>
                    {/* <button className="uppercase text-center border-2 px-5 mt-3 border-white font-semibold text-white rounded-md bg-[#FF9F1B]" onClick={() => navi('/')}>Return Back</button> */}
                </div>

            </div>



        </div>
    );
}

export default Error;