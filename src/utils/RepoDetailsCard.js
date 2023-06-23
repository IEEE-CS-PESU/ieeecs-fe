import React from "react";

const spanClass = "text-orange-400"

export default (props) => {
    const commit = props.commit
    return(
        <div className="border-solid border border-white p-4 rounded-md">
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
        </div>
    )
}