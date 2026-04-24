// Entendendo funções

// Acessando o elemento com o id
var area = document.getElementById('area');

// Declarando uma função
function entrar(){
    var nome = prompt('Digite seu nome:');

    //criando uma condição para verificar se o nome é vazio ou nulo
    if(nome === '' || nome === null){
        alert('Ops algo deu errado');
        area.innerHTML = 'Clique no botão para acessar!';
    } else{
         // criando uma mensagem de boas-vindas com o nome do usuário e exibindo na tela

        area.innerHTML = 'Bem-vindo, ' + nome + '!' + ' ';

        // Criando um elemento no js
        let botaosair = document.createElement('button');
        botaosair.innerText = 'Sair da conta';
        botaosair.onclick = sair;


        area.appendChild(botaosair);
    }

   
    
}

function sair(){
    alert('Até mais!');
    area.innerHTML = 'Você saiu da conta!';
}


// criando uma função para calucular a média escolar de um aluno se ele passou ou não de ano

function mediaAluno(/*passando parâmetros*/ nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        console.log("Aluno aprovado com a média:" + media);
    }else if(media < 7){
        console.log("Aluno reprovado com a média:" + media);

    }
} 

// criando uma função para mostrar uma frase de boas-vindas personalizada

function aluno(nome, curso){
    var mensagem = "Seja bem-vindo, " + nome + "! ao curso de " + curso;

    console.log(mensagem);
}