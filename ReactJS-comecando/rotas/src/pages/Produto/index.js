import React from 'react';
import { useParams } from 'react-router-dom';

function Produto () {
    const { id } = useParams();

    return (
        <div>
            <h2>Página do Produto</h2>
            <span>Meu Produto é {id}</span>
           
        </div>
    )
}

export default Produto;