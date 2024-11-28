import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerItem from '../components/PlayerItem';
import './Ranking.css';

function Ranking() {
  const [jogadores, setJogadores] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função para buscar o ranking
  const fetchRanking = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/ranking');
      if (response.ok) {
        const data = await response.json();
        setJogadores(data);
      } else {
        console.error('Erro ao buscar ranking.');
      }
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar um jogador
  const deletarJogador = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este jogador?')) return;

    try {
      const response = await fetch(`http://localhost:8080/api/jogadores/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Jogador deletado com sucesso!');
        setJogadores((prevJogadores) => prevJogadores.filter((jogador) => jogador.id !== id));
      } else {
        alert('Erro ao deletar jogador.');
      }
    } catch (error) {
      console.error('Erro ao deletar jogador:', error);
      alert('Erro ao deletar jogador.');
    }
  };

  // Função para atualizar a pontuação de um jogador
  const atualizarPontuacao = async (id, novaPontuacao) => {
    try {
      const response = await fetch(`http://localhost:8080/api/jogadores/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pontuacaoRanking: novaPontuacao,
        }),
      });

      if (response.ok) {
        const updatedJogador = await response.json();
        alert('Pontuação atualizada com sucesso!');
        setJogadores((prevJogadores) =>
          prevJogadores.map((jogador) =>
            jogador.id === updatedJogador.id ? updatedJogador : jogador
          )
        );
      } else {
        alert('Erro ao atualizar a pontuação.');
      }
    } catch (error) {
      console.error('Erro ao atualizar a pontuação:', error);
      alert('Erro ao atualizar a pontuação.');
    }
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  return (
    <div className="Ranking">
      <header>
        <Link to="/">
          <button id="btnVoltar">VOLTAR</button>
        </Link>
      </header>
      <main>
        <h1>Ranking dos jogadores com as melhores pontuações</h1>
        {loading && <p>Carregando...</p>}
        <ul>
          {jogadores.map((jogador) => (
            <PlayerItem
              key={jogador.id}
              id={jogador.id}
              nome={jogador.apelido}
              pontuacao={jogador.pontuacaoRanking}
              onDelete={deletarJogador}
              onUpdate={atualizarPontuacao}
            />
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
}

export default Ranking;
