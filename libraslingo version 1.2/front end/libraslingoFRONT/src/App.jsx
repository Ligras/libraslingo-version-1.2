import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jogo from './pages/Jogo';
import Quiz from './pages/Quiz';
import PraticaQuiz from './pages/PraticaQuiz';
import Ranking from './pages/Ranking';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/pratica-do-quiz" element={<PraticaQuiz />} />
        <Route path="/ranking" element={<Ranking/>}/>
      </Routes>
    </Router>
  );
}

export default App;