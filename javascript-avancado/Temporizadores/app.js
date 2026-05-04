// Temporizadores

// setInterval executa uma função a cada intervalo de tempo definido
/*function acao(){
    
    document.body.innerHTML += "Executando...<br>";
}

setInterval(acao, 1000); // Executa a função acao infinitamente a cada 1000 milissegundos (1 segundo)
*/   


// settimeout
function acao(){

    document.body.innerHTML += "Executando...<br>";
}

setTimeout(acao, 3000); // Executa a função acao apenas uma vez após 3000 milissegundos (3 segundos)