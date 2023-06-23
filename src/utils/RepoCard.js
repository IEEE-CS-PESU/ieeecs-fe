import React from "react";
import { useState, useEffect } from "react";
import git_icon from "../assets/github_repo.svg"
import {Link} from "react-router-dom"

export default (props) => {
    const [repoInfo, setRepoInfo] = useState(null)
    const octokit = props.octokit
    useEffect(() => {
        octokit.request("GET /repos/{owner}/{repo}",{
            owner: props.owner,
            repo: props.name,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then((res)=> res.data)
        .then(res => {console.log(res); return res})
        .then((res)=> setRepoInfo(res))
    }, [])

    return(
    <div className="w-48">
        {
            (repoInfo)?(
                <Link to={"/"+props.owner+"/"+props.name}><div className="repoCard border-solid border border-white rounded-lg max-w-xs p-4 text-orange-400">
                    <div className="flex gap-2">
                        {
                            (repoInfo.name)
                        }
                    </div>
                    <ul className="text-white">
                        {
                            repoInfo.topics.map((ele) => 
                                <li>{ele + " "}</li>
                            )
                        }
                    </ul>
                </div></Link>
            ): (<></>)
        }
    </div>
        )
}