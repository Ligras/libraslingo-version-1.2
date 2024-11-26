import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imagemLogo from "../img/libraslingologo.jpg";

function Home() {
  const paginaIndisponivel = () => {
    alert('Esta página está indisponível no momento.');
  };
  return (
    <div className="Home">
      <header>
        <figure>
          <img id="img1" src={imagemLogo}/>
          <figcaption>
            <h6>LIBRAS LINGO</h6>
          </figcaption>
        </figure>
        <button onClick={paginaIndisponivel} class="btn-cad">CADASTRO</button>
      </header>
      <main>
        <Link to="/jogo">
          <button class="btn-jogar">JOGAR</button>
        </Link>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Home;