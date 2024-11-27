import React, { useState } from 'react';

function CadastroJogador() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const cadastrar = () => {
    fetch("http://localhost:8080/jogadores", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        senha: senha,
      }),
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Cadastro de Jogador</h1>
      <form onSubmit={(e) => { e.preventDefault(); cadastrar(); }}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroJogador;
