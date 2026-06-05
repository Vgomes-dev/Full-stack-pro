// requisicoes-http e consumo de API com ReactJS

// Não é mais necessario importar o React para usar JSX a partir do React 17, mas ainda é uma prática comum e pode ser necessário dependendo da configuração do projeto.
import React, {useEffect, useState} from 'react';
import './style.css';
// https://sujeitoprogramador.com/rn-api/?api=posts - API de posts para testar as requisições HTTP 

//buscando informações da API / fazendo a requisição HTTP

function App() {
  //useState para armazenar os dados da API
  const [nutri, setNutri] = useState([]);

   //useEffect para fazer a requisição HTTP quando o componente for montado
  useEffect(() => {
    //chamnado a API
    function loadApi(){
      //fetch para fazer a requisição HTTP
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
        //promise para pegar a resposta da API o famoso caso de sucesso
        .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      }) 
    }

    loadApi();
  }, [])

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>

            <img src={item.capa} alt={item.titulo} className='capa'/>

            <p className='subtitulo'>{item.subtitulo}</p>

            <button type="button" className='botao'>acessar</button>
          </article>
        )
      })}
    </div>
  );
}

export default App;
