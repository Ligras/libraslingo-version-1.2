import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import imagemLogo from "../img/libraslingologo.jpg";

function Home() {
  const navigate = useNavigate(); // Hook para navegação programática

  const irParaCadastro = () => {
    navigate('/cadastro'); // Redireciona para a rota "/cadastro"
  };

  return (
    <div className="Home">
      <header>
        <figure>
          <img id="img1" src={imagemLogo} alt="Logo Libras Lingo" />
          <figcaption>
            <h6>LIBRAS LINGO</h6>
          </figcaption>
        </figure>
        {/* Substitui o alerta por navegação */}
        <button onClick={irParaCadastro} className="btn-cad">CADASTRO</button>
      </header>
      <main>
        {/* Link para o jogo */}
        <Link to="/jogo">
          <button className="btn-jogar">JOGAR</button>
        </Link>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Home;
