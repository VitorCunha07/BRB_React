import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const handleClick = () => {
    const randomEffect = Math.random() < 0.5 ? 'foguete' : 'estrela';
    
    if (randomEffect === 'foguete') {
      criarFoguetes();
      setMessage('Parabéns, você ganhou foguetes! 🚀');
    } else {
      criarEstrelas();
      setMessage('Parabéns, você ganhou estrelas! ✨');
    }
  };

  const criarFoguetes = () => {
    const area = document.getElementById("animationArea");

    for (let i = 0; i < 3; i++) {
      const foguete = document.createElement("div");
      foguete.classList.add("foguete");
      foguete.textContent = '🚀';
      foguete.style.left = Math.random() * 100 + "vw";
      foguete.style.animationDelay = `${Math.random() * 2}s`;
      area.appendChild(foguete);

      foguete.addEventListener("animationend", () => {
        foguete.remove();
      });
    }
  };

  const criarEstrelas = () => {
    const area = document.getElementById("animationArea");

    for (let i = 0; i < 10; i++) {
      const estrela = document.createElement("div");
      estrela.classList.add("estrela");
      estrela.textContent = '✨';
      estrela.style.left = Math.random() * 100 + "vw";
      estrela.style.animationDelay = `${Math.random() * 2}s`;
      area.appendChild(estrela);

      estrela.addEventListener("animationend", () => {
        estrela.remove();
      });
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Uma Surpresa Especial Está Te Esperando!</h1>
        <p>Desvende o mistério clicando no botão abaixo. Algo inesperado pode acontecer!</p>
      </header>

      <main>
        <button id="randomButton" onClick={handleClick}>Clique para a Surpresa</button>
        <div id="animationArea"></div>
        <div id="resultMessage">{message}</div>
      </main>

      <footer>
        <p>Este é apenas o começo. Algo incrível pode surgir do nada!</p>
        <p>Experimente e se surpreenda com o inesperado.</p>
      </footer>
    </div>
  );
}

export default App;