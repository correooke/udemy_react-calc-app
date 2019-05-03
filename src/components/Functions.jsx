import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions