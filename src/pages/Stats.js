import React, {useEffect, useState} from "react";

import {Octokit} from "octokit"
import Contributors from "../Components/Contributors"
import Repositories from "../Components/Repositories"

const octokit = new Octokit({
    auth: process.env.github_tok
})

const Stats = () => {
    const [data, setData] = useState(
        {
            repoList: null,
            contributors: null
        }
    )

    useEffect(()=>{
        octokit.request('GET /orgs/{org}/repos', {
            org: "IEEE-CS-PESU",
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then((res) => res.data)
        .then((res)=> setData((prev) => ({
            repoList: res,
            contributors: prev.contributors
        })))
        .then(() => console.log(data))
        .catch((err) => console.error(err))
    }, [data])

    useEffect(()=>{
        octokit.request('/orgs/{org}/members', {
            org: "IEEE-CS-PESU",
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then((res) => res.data)
        .then((res)=> setData((prev) => ({
            repoList: prev.repoList,
            contributors: res
        })))
        .catch((err) => console.error(err))
    }, [])


    return (
        <div className="stats">
            {(data.repoList)?(<Repositories octokit={octokit} repoList={data.repoList}></Repositories>):(<></>)}
            {(data.contributors)?(<Contributors octokit={octokit} contributors={data.contributors}></Contributors>):(<></>)}
        </div>
    );
}

export default Stats