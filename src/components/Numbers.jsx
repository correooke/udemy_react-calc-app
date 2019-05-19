import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// DRY: Don't repeat yourself
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = onClickNumber => {
    // var number = 0
    // iterar desde el botón 1 al 0 (while, for, foreach)
    // var ArrayComponentes += 
    //<Button text={number.toString()} clickHandler={onClickNumber} />
    const renderButton = number => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} 
        />
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;