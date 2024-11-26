import React from 'react';
import { Link } from 'react-router-dom';
import './PraticaQuiz.css';
import imagemAlfabeto from "../img/AlfabetoLibras.jpg";

function PraticaQuiz (){
    return(
        <div className="PraticaQuiz">
            <header>
                <Link to="/">
                    <button id="btnVoltar">VOLTAR</button>
                </Link>
            </header>
            <main>
                <img id="img2" src={imagemAlfabeto}/>
            </main>
            <footer>
            </footer>
        </div>
    );
}
export default PraticaQuiz;