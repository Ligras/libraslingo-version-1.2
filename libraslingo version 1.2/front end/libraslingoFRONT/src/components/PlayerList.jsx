import React from 'react';
import PlayerItem from './PlayerItem';

function PlayerList({ jogadores, onDelete }) {
  return (
    <ul>
      {jogadores.map((jogador) => (
        <PlayerItem 
          key={jogador.id} 
          id={jogador.id}
          nome={jogador.apelido} 
          pontuacao={jogador.pontuacaoRanking} 
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default PlayerList;
