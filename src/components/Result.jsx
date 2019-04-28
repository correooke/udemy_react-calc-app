import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {
    console.log("Renderización de Result", value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
   value: "0"
}

export default Result