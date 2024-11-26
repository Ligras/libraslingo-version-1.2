import React from 'react';
import { Link } from 'react-router-dom';
import { APIProvider } from '../context/APIContext.jsx';
import PlayerList from '../components/PlayerList.jsx';
import './Ranking.css';

function Ranking() {
  return (
    <div className="Ranking">
      <header>
        <Link to="/">
          <button id="btnVoltar">VOLTAR</button>
        </Link>
      </header>
      <main>
        <APIProvider>
          <div>
            <h1>Ranking dos jogadores com as melhores pontuações</h1>
            <PlayerList />
          </div>
        </APIProvider>
      </main>
      <footer></footer>
    </div>
  );
}

export default Ranking;
