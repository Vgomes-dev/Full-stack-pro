
// buscando os elementos para fazer a relação entre eles
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

// Armazenando as tarefas em um array e buscando as tarefas salvas no localStorage para não perder as tarefas ao atualizar a página
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

// Renderizando as tarefas para a tela
function renderTarefas(){
    // zerando a lista para não repetir as tarefas
    listElement.innerHTML = "";

    // percorrendo o array de tarefas para renderizar cada tarefa
    tarefas.map((todo)=>{
        // Criando um elemento li para cada tarefa
        let liElement = document.createElement("li");

        //criando um texto para cada tarefa
        let tarefaText = document.createTextNode(todo);

        // Criando um elemento âncora para cada tarefa
        let linkElement = document.createElement("a");
        // Passando um atributo href para o elemento âncora
        linkElement.setAttribute("href", "#");
        // Adicionando um texto para o elemento âncora
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        // Buscando possição da tarefa no array de tarefas
        let posicao = tarefas.indexOf(todo);

        // Chamando a função de deletar tarefa para o evento de click do elemento âncora
        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);


        //Adicinando o texto da tarefa para o elemento li
        liElement.appendChild(tarefaText);

        //Adicinando o elemento âncora para o elemento li
        liElement.appendChild(linkElement);

        //Adicinando o elemento li a lista ul
        listElement.appendChild(liElement);


    })
};

// Chamando a função de renderizar as tarefas para a tela
renderTarefas();

// função de adicionar tarefas a lista

function adicionarTarefas() {
    // Verificando se o campo de input está vazio
    // para não adicinar tarefas vazias a lista
    if(inputElement.value === '') {
        alert("Digite alguma tarefa");
        return false;
    } else{
        // Aicionando o que foi digitado no input para o array de tarefas 
        let novaTarefa = inputElement.value;

        tarefas.push(novaTarefa);
        inputElement.value = '';

        // Renderizando as tarefas para a tela
        renderTarefas();
        // Chamando a função de salvar os dados no localStorage
        salvarDados();
    } 
};

// criando a ação do botão para adicionar as tarefas 

buttonElement.onclick = adicionarTarefas;


// Criando a função de excluir tarefas da lista

function deletarTarefa(posicao) {
    // Deletando a tarefa do array de tarefas usando a função splice
    tarefas.splice(posicao, 1);

    // Renderizando as tarefas para a tela
    renderTarefas();
    salvarDados();
}


// Salvando as tarefas no localStorage para não perder as tarefas ao atualizar a página
function salvarDados(){
    //acessando o localStorage e salvando as tarefas em formato de string
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas) );
}