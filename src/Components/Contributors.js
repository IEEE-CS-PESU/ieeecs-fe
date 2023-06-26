import React from "react"
import ContributorCard from "../utils/ContributorCard"

export default (props) => {
    return(
    <div className="pt-36">
        <div className="pb-4">
            <p className="md:text-8xl text-6xl text-white">
              Contributors
            </p>
        </div>
        <div className="contributors flex justify-center flex-wrap gap-2">
            {
                props.contributors.map((ele) => <ContributorCard username={ele.login} octokit={props.octokit}></ContributorCard>)
            }
        </div>
    </div>
    )
}