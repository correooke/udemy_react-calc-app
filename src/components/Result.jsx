import React from 'react'

const Result = ({ value }) => {
    console.log("Renderización de Result", value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

export default Result