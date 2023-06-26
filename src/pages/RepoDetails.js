import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import {Octokit} from "octokit"
import RepoDetailsCard from "../utils/RepoDetailsCard"
import ContributorCard from "../utils/ContributorCard"

const octokit = new Octokit({
    auth: "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"
})


const CommitInfo = ({sha, owner, repo}) =>{
    console.log(sha, owner, repo)
    useEffect(() => {
        octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
            owner: owner,
            repo: repo,
            ref:sha,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then(res=>res.data)
        .then(res=>console.log(res))
    }, [])
}


export default ({cSpecific}) => {
    const {owner, repo, sha} = useParams();
    const [details, setDetails] = useState({
        commits: null,
        languages: null,
        contributors: null,
    })


    useEffect(() => {
        octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: owner,
            repo: repo,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then(res=>res.data)
        .then(res=>{setDetails((prev) => {
            return ({
                commits: res,
                languages: prev.languages,
                contributors: prev.contributors
            })
        })})
    }, [])

    useEffect(() => {
        octokit.request('GET /repos/{owner}/{repo}/languages', {
            owner: owner,
            repo: repo,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then(res=>res.data)
        .then(res=>{
            return {
                langs: Object.keys(res),
                freq: Object.values(res)
            }
        })
        .then(res=>{setDetails((prev) => {
            return ({
                commits: prev.commits,
                languages: res,
                contributors: prev.contributors
            })
        })})
    }, [])

    useEffect(() => {
        octokit.request('GET /repos/{owner}/{repo}/contributors', {
            owner: owner,
            repo: repo,
            headers: {
                accept: "application/vnd.github+json"
            }
        })
        .then(res=>res.data)
        .then(res=>{setDetails((prev) => {
            return ({
                commits: prev.commits,
                languages: prev.languages,
                contributors: res
            })
        })})
    }, [])

    return (
        <div className="pt-36 text-white">
            <div className="pl-12 pb-4 text-4xl">
                {repo}
            </div>

            <div className="pl-12 pb-4 text-2xl"> Languages </div>
            <div className="pl-12 pb-4">
                {(details.languages)?(
                    <div>
                        {
                            details.languages.langs.map((ele, idx)=>{
                                return(
                                    <div>
                                        {ele} : {Math.floor((details.languages.freq[idx]/details.languages.freq.reduce(function(a, b) { return a + b; }, 0))*100) + "%"}
                                    </div>
                                )
                            })
                        }
                    </div>
                ):<></>}
            </div>
            <div className="pl-12 pb-4 text-2xl"> Contributors </div>
            <div className="pl-12 pb-4 flex flex-wrap">
                {(details.contributors)?(
                    <div className="gap-4 flex">
                        {
                            details.contributors.map((ele, idx)=>{
                                return(
                                    <ContributorCard octokit={octokit} username={ele.login}></ContributorCard>
                                )
                            })
                        }
                    </div>
                ):<></>}
            </div>
            <div className="pl-12 pb-4 text-2xl"> {(cSpecific)?"Commit":"Commits"} </div>
            <div>
                {
                    (cSpecific)?
                    (<CommitInfo sha={sha} owner={owner} repo={repo}></CommitInfo>)
                    :
                    (<div className=" flex flex-wrap justify-center gap-4">
                        {
                            (details && details.commits)?(
                                details.commits.map((ele) => {
                                    return(<RepoDetailsCard commit={ele} repo={repo}></RepoDetailsCard>)
                                })
                            ):(<></>)
                        }
                    </div>)
                }
            </div>
        </div>
    )
}