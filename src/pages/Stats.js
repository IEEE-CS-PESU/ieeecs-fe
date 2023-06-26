import React, {useEffect, useRef, useState} from "react";
import Hero from "../utils/Hero";
import {Octokit, App} from "octokit"
import Contributors from "../Components/Contributors"
import Repositories from "../Components/Repositories"

const octokit = new Octokit({
    auth: "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"
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
    }, [])

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