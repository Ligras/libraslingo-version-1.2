import React from 'react';
import { Link } from 'react-router-dom';
import './Jogo.css';

function Jogo() {
  const paginaIndisponivel = () => {
    alert('Esta página está indisponível no momento.');
  };

  return (
    <div className="Jogo">
      <header>
        <Link to="/">
          <button id="btnVoltar">VOLTAR</button>
        </Link>
        <h1>JOGOS:</h1>
      </header>
      <main>
        <div>
          <Link to="/quiz">
            <button>QUIZ DO ALFABETO EM LIBRAS</button>
          </Link>
          <Link to="/pratica-do-quiz">
            <button>praticar</button>
          </Link>
          <Link to="/ranking">
            <button>ranking</button>
          </Link>
        </div>
        <div>
          <button onClick={paginaIndisponivel}>JOGO DA MEMÓRIA EM LIBRAS</button>
          <button onClick={paginaIndisponivel}>praticar</button>
        </div>
        <div>
          <button onClick={paginaIndisponivel}>EXPRESSÕES MAIS USADAS EM LIBRAS</button>
          <button onClick={paginaIndisponivel}>praticar</button>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Jogo;