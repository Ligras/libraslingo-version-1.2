import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Cadastro.css';


function CadastroUsuario() {
  const navigate = useNavigate();
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [tipo, setTipo] = useState("Jogador"); // Tipo de usuário (Jogador ou Administrador)
  const [pontuacaoRanking, setPontuacaoRanking] = useState(0); // Específico para Jogador

  const cadastrar = () => {
    // Determinar a URL dependendo do tipo de usuário
    const url = tipo === "Jogador" 
      ? "http://localhost:8080/api/jogadores" 
      : "http://localhost:8080/api/administradores";

    // Criar o corpo da requisição, incluindo pontuação para jogadores
    const body = {
      apelido,
      senha,
      ...(tipo === "Jogador" && { pontuacaoRanking }), // Incluir pontuacaoRanking apenas para Jogador
    };

    // Enviar a requisição POST para o backend
    fetch(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          console.log(`${tipo} cadastrado com sucesso!`);
          alert(`${tipo} cadastrado com sucesso!`); // Alerta de sucesso

          // Após o cadastro, redireciona para a página Home
          localStorage.setItem('cadastroConcluido', 'true'); // Marca no localStorage que o cadastro foi concluído
          navigate('/'); // Redireciona para a página Home
        } else {
          console.error(`Erro ao cadastrar ${tipo.toLowerCase()}.`);
          alert(`Erro ao cadastrar ${tipo.toLowerCase()}.`); // Alerta de erro
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.error("Erro na requisição:", err);
        alert("Erro na requisição. Tente novamente."); // Alerta de falha na requisição
      });
  };

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={(e) => { e.preventDefault(); cadastrar(); }}>
        <div>
          <label htmlFor="apelido">Apelido:</label>
          <input
            type="text"
            id="apelido"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
            placeholder="Digite seu apelido"
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
        <div>
          <label htmlFor="tipo">Tipo de Usuário:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Jogador">Jogador</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>
        {tipo === "Jogador" && (
          <div>
            <label htmlFor="pontuacaoRanking">Pontuação:</label>
            <input
              type="number"
              id="pontuacaoRanking"
              value={pontuacaoRanking}
              onChange={(e) => setPontuacaoRanking(Number(e.target.value))}
              placeholder="Pontuação inicial"
            />
          </div>
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
