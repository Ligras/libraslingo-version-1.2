import React from 'react';
import { useAPI } from '../context/APIContext';
import PlayerItem from './PlayerItem';

function PlayerList() {
  const jogadores = useAPI();

  return (
    <ul>
      {jogadores.map((jogador, index) => (
        <PlayerItem key={index} nome={jogador.nome} pontuacao={jogador.pontuacao} />
      ))}
    </ul>
  );
};

export default PlayerList;