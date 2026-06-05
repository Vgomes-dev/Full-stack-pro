import React from 'react';
import { Link } from 'react-router-dom';
// instalando react-router-dom (npm install react-router-dom) --- IGNORE ---

function Home() {
  return (
    <div className="App">
        <h1>Bem vindo a página HOME</h1>
        <span>Sujeito Programador</span> <br/> <br/>

      <Link to="/sobre">Sobre</Link> <br/><br/>
      <Link to="/contato">Contato</Link>

      <hr/>
      <Link to="/produto/123">Produto</Link>
    </div>
  );
}

export default Home;
