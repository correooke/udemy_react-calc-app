import React, { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    // Array Destructuring
    // 1er posición: valor (que inicialmente es el valor por defecto)
    // 2da posición: función que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={stack} />
        <Numbers onClickNumber={number => {
            console.log("Click en number", number)
            setStack(`${stack}${number}`)
        }} />
        <Functions 
            onContentClear={() => 
                console.log("Content Clear")}
            onDelete={() => 
                console.log("onDelete")}
        />
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }
        />
    </main>)
}

export default App

