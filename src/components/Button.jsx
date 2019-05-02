// importar React
import React from 'react'

// Componente Funcional
const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            console.log("onClick en el Button")
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

export default Button
