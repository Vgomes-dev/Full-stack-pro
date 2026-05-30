import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);


function handleRegister(e){
  e.preventDefault();

  setTarefas([...tarefas, input]);
  setInput('');
}


  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuario</h1>

        <label>Nomr da tarefa:</label><br/>
        <input placeholder='Digite uma tarefa' 
        value={input}
        onChange={ (event) => setInput (event.target.value) }
        /><br/>        

        <button type='submit'>Registrar</button>
      </form>

      <ul>
         {
        (tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        )))
      }
      </ul>
      <br/>
      
      <br/>
    </div>
  );
}

export default App;
