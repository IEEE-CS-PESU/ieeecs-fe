import React from "react"
import RepoCard from "../utils/RepoCard"

export default (props) => {
    return(
    <div className="pt-36">
        <div className="pb-4">
            <p className="md:text-8xl text-6xl text-white">
              Repositories
            </p>
        </div>
        <div className="respositories flex justify-evenly flex-wrap gap-2">
            {
                props.repoList.map((ele) => <RepoCard owner={ele.owner.login} name={ele.name} octokit={props.octokit}></RepoCard>)
            }
        </div>
    </div>
    )
}