import React, { createContext, useContext, useState } from 'react';


const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [jogadores] = useState([
    { nome: 'Jogador 1', pontuacao: 1000 },
    { nome: 'Jogador 2', pontuacao: 900 },
    { nome: 'Jogador 3', pontuacao: 800 },
    { nome: 'Jogador 4', pontuacao: 700 },
    { nome: 'Jogador 5', pontuacao: 600 },
    { nome: 'Jogador 6', pontuacao: 500 },
    { nome: 'Jogador 7', pontuacao: 400 },
    { nome: 'Jogador 8', pontuacao: 300 },
    { nome: 'Jogador 9', pontuacao: 200 },
    { nome: 'Jogador 10', pontuacao: 100 },
  ]);

  return (
    <APIContext.Provider value={jogadores}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  return useContext(APIContext);
};