//componente que mostra o nome da pessoa que está online no site

// usando props destruturada
function Nome({ aluno, idade }){
  return(
    <span>Bem-vindo: Matheus {aluno} - idade: {idade} anos </span>
  );
}

export default Nome;