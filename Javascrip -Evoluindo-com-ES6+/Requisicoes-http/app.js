// URL: https://sujeitoprogramador.com/rn-api/?api=posts

// Selecionando uma elemento HTML com ID
let listElement = document.querySelector("#app");

let posts = [];

// Criando uma função
function nutriApp(){
    //consumindo uma API

    // usando nossa URL com uma promise que promete da certo ou errado pois estamos consumindo algo da web e a internet pode cair ou a página
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    //fazendo as tratativas da promise com o nosso caso de sucesso ele vai buscar as requisições se der certo vai cair dentro do then
    .then((r)=> r.json())
    .then((json)=> {
        
        // Recebendo os itens da API
        posts = json;

        posts.map((item)=> {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            let imgElement = document.createElement("img");
            let descriptionElement = document.createElement("a");

            let titleText = document.createTextNode(item.title)
            titleElement.appendChild(titleText);
            liElement.appendChild(titleElement);

            imgElement.src = item.capa;
            liElement.appendChild(imgElement)

            let descriptionText = document.createTextNode(item.subtitulo);
            descriptionElement.appendChild(descriptionText); 
            liElement.appendChild(descriptionElement);

            listElement.appendChild(liElement);
        })

    })
    //se caso der errado o catch captura o erro
    .catch(()=> {
        console.log("DEU ALGUM ERRO")
    })
}

// Chamando nossa função
nutriApp();