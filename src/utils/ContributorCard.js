import React from "react";
import { useState, useEffect } from "react";

let ContributorCard = (props) => {
    const [userInfo, setUserInfo] = useState(null)
    const octokit = props.octokit
    useEffect(() => {
        octokit.request("GET /users/{username}",{
            username: props.username,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then((res)=> res.data)
        .then((res)=> setUserInfo(res))
    }, [props.username, octokit])

    return(
    <div className="contributorCard border-solid border border-white rounded-lg width-1/5 max-w-xs p-4">
        {
            (userInfo)?(
                <div className="flex width-1/5 gap-4">
                    <img src={userInfo?userInfo.avatar_url:""} alt="User Avatar" className="rounded-full w-12 h-12"></img>
                    <div className="text-base text-white">
                        <div>{userInfo.name}</div>
                        <div className="text-base">{userInfo.login}</div>
                    </div>
                </div>
            ):(<></>)
        }
    </div>)
}

export default ContributorCard