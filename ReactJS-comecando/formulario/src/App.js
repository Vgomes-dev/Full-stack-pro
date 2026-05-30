import { useState } from 'react';

function App() {
  // const para usar nos input para armazenar o nome que for passado
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

// função para criaar uma alerta no formulario e para colocar o que foi armazenado no input dentro dos span logo abaixo ao botão de registrar
function handleRegister(e){
  e.preventDefault();

  alert('Usuario registrado com sucesso!')
  setUser({
    nome: nome,
    idade: idade,
    email: email,
  })
}


  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <h1>Cadastrando usuario</h1>

        <label>Nome:</label><br/>
        <input placeholder='Digite seu nome' 
        value={nome}
        onChange={ (event) => setNome(event.target.value) }
        /><br/>

        <label>Email:</label><br/>
        <input placeholder='Digite seu email ' 
        value={email}
        onChange={(e) => setEmail(e.target.value) }
        /> <br/>

        <label>Idade:</label><br/>
        <input placeholder='Digite sua Idade' 
        value={idade}
        onChange={ (e) => setIdade(e.target.value) }
        /><br/>

        <button type='submit'>Registrar</button>
      </form>

      <div></div>
      <br/>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Idade: {user.idade}</span><br/>
      <span>Email: {user.email}</span><br/>
      <br/>
    </div>
  );
}

export default App;
