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