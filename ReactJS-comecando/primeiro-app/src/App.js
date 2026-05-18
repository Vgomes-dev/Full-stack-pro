// importando componentes
import Nome from './componentes/Nome'
// componente e props

// Componente sempre com a primeira letra maiuscula (App)
function App(){
  //jsx e utilizando componentes separados
  return(
    <div>
      <h1 className='container'>Componete APP</h1>
       <Nome aluno="Lucas" idade={30}/>
       <br/>
       <Nome aluno="José Silva" idade={25}/>
    </div>
   
  );
}

// exportando o componete App para aparecer na página
export default App;


