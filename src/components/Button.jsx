// importar React
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

// Componente Funcional
// type = button-long-text
const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
} 

export default Button
