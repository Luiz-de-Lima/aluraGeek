import React from 'react';
import './styles.scss'
const Home = () => {
    return (
        <>
            <div className="container">
                <header>
                    <img src="../../assets/logo.png" alt="logo aluraGeek" />   <span>Alura</span>Geek
                    <input type="search" name="search" id="" placeholder='o que deseja encontrar' />
                    <button>Login</button>
                </header>
            </div>
        </>
    )
}

export default Home;