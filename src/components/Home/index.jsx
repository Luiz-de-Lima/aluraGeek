import React from 'react';
import Buttons from '../Buttons';
import Inputs from '../Form/Inputs/inputs'
import Logo from '../../../src/Logo.png'
import './styles.scss'

const Home = () => {
    return (
        <>
            <div className="homecontainer">
                <header>
                    <div className='alura'>
                        <img src={Logo} alt="logo aluraGeek" className="logo" />
                        <Inputs type="search" name="search" id="" placeholder='o que deseja encontrar?' />
                    </div>
                    <Buttons>Login</Buttons>
                </header>
            </div>
        </>
    )
}

export default Home;