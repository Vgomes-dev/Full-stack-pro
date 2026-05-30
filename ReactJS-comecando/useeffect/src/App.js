import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');


// useEffect = ciclo de vida



const [tarefas, setTarefas] = useState(() => {
  const tarefasStorage = localStorage.getItem('@tarefa');
  return tarefasStorage ? JSON.parse(tarefasStorage) : [];
});

useEffect(() => {
  // 1° uso: É executado toda vez que entram no siter e tammbém quando o 2° uso for ativado o primeiro ativara se existir

  // usando local storage para armazenar as tarefas
  localStorage.setItem('@tarefa', JSON.stringify(tarefas));
}, [tarefas]);

function handleRegister(e){
  e.preventDefault();

  setTarefas([...tarefas, input]);
  setInput('');
}


  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuario</h1>

        <label>Nome da tarefa:</label><br/>
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


