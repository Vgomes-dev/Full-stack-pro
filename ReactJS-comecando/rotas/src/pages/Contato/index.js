import React from 'react';
import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
        <h1>página para contato</h1>
        <span>Contato da empresa (dd) 99999-9999</span> <br/><br/>

        <Link to="/">Home</Link> <br/><br/>
        <Link to="/sobre">Sobre</Link> 
    </div>
  );
}

export default Contato;
