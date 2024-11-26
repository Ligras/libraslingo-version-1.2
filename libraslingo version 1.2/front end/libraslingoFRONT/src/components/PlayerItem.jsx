import React from 'react';

function PlayerItem ({ nome, pontuacao }) {
  return (
    <li>
      {nome} - Pontuação: {pontuacao}
    </li>
  );
};

export default PlayerItem;