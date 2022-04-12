import React from 'react'
import './input.scss'


const Inputs = (props) => {
    const [nome, setNome] = React.useState('')
    function handleChange(event) {
        console.log(event)
    }
    return (
        <>
            <label htmlFor="nome">
                {props.label}
            </label>

            <input name="" id="nome" onChange={handleChange} {...props} />

        </>
    )
}

export default Inputs