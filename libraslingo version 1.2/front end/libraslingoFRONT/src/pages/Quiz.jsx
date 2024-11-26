import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Importando imagens diretamente
import A from "../img/A.jpg";
import B from "../img/B.jpg";
import C from "../img/C.jpg";
import D from "../img/D.jpg";
import E from "../img/E.jpg";
import F from "../img/F.jpg";
import G from "../img/G.jpg";
import H from "../img/H.jpg";
import I from "../img/I.jpg";
import J from "../img/J.jpg";
import K from "../img/K.jpg";
import L from "../img/L.jpg";
import M from "../img/M.jpg";
import N from "../img/N.jpg";
import O from "../img/O.jpg";
import P from "../img/P.jpg";
import Q from "../img/Q.jpg";
import R from "../img/R.jpg";
import S from "../img/S.jpg";
import T from "../img/T.jpg";
import U from "../img/U.jpg";
import V from "../img/V.jpg";
import W from "../img/W.jpg";
import X from "../img/X.jpg";
import Y from "../img/Y.jpg";
import Z from "../img/Z.jpg";

// Lista de imagens como objetos
const matrizImagens = [
  { letra: "A", src: A },
  { letra: "B", src: B },
  { letra: "C", src: C },
  { letra: "D", src: D },
  { letra: "E", src: E },
  { letra: "F", src: F },
  { letra: "G", src: G },
  { letra: "H", src: H },
  { letra: "I", src: I },
  { letra: "J", src: J },
  { letra: "K", src: K },
  { letra: "L", src: L },
  { letra: "M", src: M },
  { letra: "N", src: N },
  { letra: "O", src: O },
  { letra: "P", src: P },
  { letra: "Q", src: Q },
  { letra: "R", src: R },
  { letra: "S", src: S },
  { letra: "T", src: T },
  { letra: "U", src: U },
  { letra: "V", src: V },
  { letra: "W", src: W },
  { letra: "X", src: X },
  { letra: "Y", src: Y },
  { letra: "Z", src: Z },
];

export default function Quiz() {
  const [imagemAtual, setImagemAtual] = useState({});
  const [respostaCorreta, setRespostaCorreta] = useState("");
  const [opcoesQuiz, setOpcoesQuiz] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [bloquearClick, setBloquearClick] = useState(false);

  useEffect(() => {
    exibirQuestao();
  }, []);

  const exibirQuestao = () => {
    const indiceImagem = Math.floor(Math.random() * matrizImagens.length);
    const novaImagem = matrizImagens[indiceImagem];
    setImagemAtual(novaImagem);
    setRespostaCorreta(novaImagem.letra);
    sortearOpcoes(novaImagem.letra);
  };

  const sortearOpcoes = (correta) => {
    const indices = new Set();
    while (indices.size < 3) {
      const indiceAleatorio = Math.floor(Math.random() * matrizImagens.length);
      if (matrizImagens[indiceAleatorio].letra !== correta) {
        indices.add(matrizImagens[indiceAleatorio].letra);
      }
    }
    const opcoesAleatorias = Array.from(indices);
    const posicaoCorreta = Math.floor(Math.random() * 4);
    opcoesAleatorias.splice(posicaoCorreta, 0, correta);
    setOpcoesQuiz(opcoesAleatorias);
  };

  const verificarResposta = (opcaoSelecionada) => {
    if (bloquearClick) return;
    setBloquearClick(true);

    if (opcaoSelecionada === respostaCorreta) {
      setAcertos(acertos + 1);
      setMensagem("Acertou!");
      setTimeout(() => {
        setMensagem("");
        exibirQuestao();
        setBloquearClick(false);
      }, 2000);
    } else {
      setErros(erros + 1);
      setMensagem("Errou! Tente novamente.");
      setTimeout(() => {
        setMensagem("");
        setBloquearClick(false);
      }, 2000);
    }

    if (acertos + 1 >= 10) {
      setTimeout(() => (window.location.href = "vitoria.html"), 2000);
    } else if (erros + 1 >= 10) {
      setTimeout(() => (window.location.href = "derrota.html"), 2000);
    }
  };

  return (
    <div className="quiz-container">
      <Link to="/">
        <button id="btnVoltar">VOLTAR</button>
      </Link>
      <h1>Quiz de Reconhecimento de Letras</h1>
      <div id="imagem">
        {imagemAtual.src && (
          <img src={imagemAtual.src} alt={`Letra ${imagemAtual.letra}`} style={{ width: "200px" }} />
        )}
      </div>
      <div className="opcoes-container">
        {opcoesQuiz.map((opcao, index) => (
          <button
            key={index}
            onClick={() => verificarResposta(opcao)}
            className="opcao-btn"
            disabled={bloquearClick}
          >
            {opcao}
          </button>
        ))}
      </div>
      <p id="mensagem">{mensagem}</p>
      <div className="placar">
        <p>Acertos: <span id="acertos">{acertos}</span></p>
        <p>Erros: <span id="erros">{erros}</span></p>
      </div>
    </div>
  );
}
