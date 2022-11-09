import React from 'react'
import Quiz from "../img/quiz.svg"
import "./css/Inicio.css"

const Inicio = () => {
    return (
        <div>
            <div id='inicio'>
                <h2>Seja bem-vindo</h2>
                <p>Clique no botão abaixo para começar</p>
                <button>Iniciar</button>
                <img src={Quiz} alt="Início do Quiz" />
            </div>  
        </div>
    )
}

export default Inicio