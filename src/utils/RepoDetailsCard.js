import React from "react";

const spanClass = "text-orange-400"

let RepoDetailsCard =  (props) => {
    const commit = props.commit
    return(
        <div className="border-solid border border-white p-4 rounded-md">
            <a href={"./"+props.repo+"/"+commit.sha}>
                <div>
                    <span className={spanClass}>Commit Message:</span> {commit.commit.message}
                </div>
                <div >
                <span className={spanClass}>Author: </span> {commit.commit.author.name}
                </div>
                <div>
                <span className={spanClass}>Date: </span> {commit.commit.author.date}
                </div>
                <div>
                <span className={spanClass}>SHA:</span> {commit.sha}
                </div>
            </a>
        </div>
    )
}

export default RepoDetailsCard