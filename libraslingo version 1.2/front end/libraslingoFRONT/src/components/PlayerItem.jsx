import React, { useState } from 'react';

function PlayerItem({ id, nome, pontuacao, onDelete, onUpdate }) {
  const [editando, setEditando] = useState(false);
  const [novaPontuacao, setNovaPontuacao] = useState(pontuacao);

  const handleUpdate = () => {
    if (novaPontuacao !== pontuacao) {
      onUpdate(id, novaPontuacao);
    }
    setEditando(false);
  };

  return (
    <li>
      {nome} - Pontuação: 
      {editando ? (
        <>
          <input
            type="number"
            value={novaPontuacao}
            onChange={(e) => setNovaPontuacao(Number(e.target.value))}
          />
          <button onClick={handleUpdate}>Atualizar</button>
        </>
      ) : (
        <span>{pontuacao}</span>
      )}
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Deletar
      </button>
      <button className="btn-edit" onClick={() => setEditando(!editando)}>
        {editando ? 'Cancelar' : 'Editar'}
      </button>
    </li>
  );
}

export default PlayerItem;
