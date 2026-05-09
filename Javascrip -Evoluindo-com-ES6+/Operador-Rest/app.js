// Operador Rest
// Uso parecido com o Spread, mas dedicado para as funções

// Criando função de convidados e usando o operador Rest para receber um número indefinido de argumentos
function convidados(...nomes){
    console.log("SEJA BEM VINDO TODOS OS CONVIDADOS !")
    console.log(nomes);
};

// Chmando a função de convidados, passando os nomes dos convidados como argumentos que será exibidos no console.log(nomes);
convidados("Matheus", "Victor", "Lucas",  "Maria");

// Criando sorteador de números, usando o operador Rest para receber um número indefinido de argumentos

function sorteador(...numeros){
    console.log(numeros);
    
    // Verificando a posição do número gerado e calculando o número gerado e randonizando ele e por fim exibindo o número gerado no console.log("Número gerado foi: " + numeros[numeroGerado]);
    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log("Número gerado foi: " + numeros[numeroGerado]);
    
};

sorteador(1, 4, 5, 15, 25, 90, 55, 34);