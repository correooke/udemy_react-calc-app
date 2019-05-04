import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        <Button text="1" clickHandler={onClickNumber} />
        <Button text="2" clickHandler={onClickNumber} />
        <Button text="3" clickHandler={onClickNumber} />
        <Button text="4" clickHandler={onClickNumber} />
        <Button text="5" clickHandler={onClickNumber} />
        <Button text="6" clickHandler={onClickNumber} />
        <Button text="7" clickHandler={onClickNumber} />
        <Button text="8" clickHandler={onClickNumber} />
        <Button text="9" clickHandler={onClickNumber} />
        <Button text="0" clickHandler={onClickNumber} />
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers;