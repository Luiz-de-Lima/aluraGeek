import React from 'react'
import './styles.scss'

const Buttons = (props) => {

    return (
        <>
            <button>{props.children}</button>
        </>
    )
}

export default Buttons