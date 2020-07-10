import React, {FC} from 'react'
import Button, { ButtonClickHandler } from './Button'

// DRY: Don't repeat yourself
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber : ButtonClickHandler) => {
    // var number = 0
    // iterar desde el botón 1 al 0 (while, for, foreach)
    // var ArrayComponentes += 
    //<Button text={number.toString()} clickHandler={onClickNumber} />
    const renderButton = (number : number) => (
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber} 
        />
    )
    return numbers.map(renderButton)
}

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)

export default Numbers;