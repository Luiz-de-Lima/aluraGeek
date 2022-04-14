import React from 'react'
import Inputs from '../Form/Inputs/inputs'
import Buttons from '../Buttons'
import Logo from '../../../src/Logo.png'
import './styles.scss'
const Footer = () => {
    return (
        <>
        <section>
            <div className="container">
            
                <div className="links">
                <img src={Logo} alt="logo aluraGeek" />
                    <ul>
                        <li>Quem Somos</li>
                        <li>Política de privacidade</li>
                        <li>Programa de fidelidade</li>
                        <li>Nossas lojas</li>
                        <li>Quero ser franqueado</li>
                        <li>Anuncie aqui</li>
                    </ul>
                </div>
                <div className="fale-conosco">
                    <p>Fale conosco</p>
                    <Inputs type="text" className="teste" />
                    <textarea placeholder='escreva sua mensagem'>
                    </textarea>
                    <Buttons>Enviar mensagem</Buttons>
                </div>

            </div>
            
        </section>
        <footer className="copy">
                <p>Desenvolvido por <span>Luiz de Lima</span></p>
                <p>2022</p>
            </footer>
        </>
    )
}

export default Footer