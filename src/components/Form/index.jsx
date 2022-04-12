import React from 'react'
import Inputs from './Inputs/inputs'
import Buttons from '../Buttons'
import './styles.scss'


const Form = () => {
    return (
        <div className='container'>
            <form action="">
                <p>Iniciar Sessão</p>
                <Inputs type="email" label="email" placeholder="Escreva seu email" size="large" />
                <Inputs type="password" label="senha" placeholder="Escreva sua senha" />

                <Buttons>Entrar</Buttons>
            </form>
        </div>
    )
}

export default Form