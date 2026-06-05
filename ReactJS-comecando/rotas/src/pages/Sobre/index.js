import React from 'react';
import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
        <h1>página sobre a empresa</h1> <br/><br/>
        
        <Link to="/">Home</Link> <br/><br/>
        <Link to="/contato">Contato</Link>
        
    </div>
  );
}

export default Sobre;
