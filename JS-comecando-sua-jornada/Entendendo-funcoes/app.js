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