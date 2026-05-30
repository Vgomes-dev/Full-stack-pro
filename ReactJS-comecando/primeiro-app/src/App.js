//importando o userState/hook
import { useState } from 'react';

// importando componentes
//import Nome from './componentes/Nome';

// componente e props

// Componente sempre com a primeira letra maiuscula (App)
function App(){
  //criando o hook
  const [aluno, setAluno] = useState('Sujeito Programador')

  //criando uma função para mudar o nome no hook
  function handleChangeName (nome){
    // o nome será substituido pelo nome que estára dentro do set
    setAluno(nome)
  }

  //jsx e utilizando componentes separados
  return(
    <div>
      <h1 className='container'>Componete APP</h1> <br/>
      <h2> Olá: {aluno} </h2>
      <button onClick={ () => handleChangeName('Lucas Oliveira') }> 
        Mudar nome
      </button>
    </div>
   
  );
}

// exportando o componete App para aparecer na página
export default App;

