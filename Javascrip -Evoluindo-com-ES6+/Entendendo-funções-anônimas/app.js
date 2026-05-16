// Funções anônimas

/* 
a fução anônima consitem em 3 etapas
() => {}
     
 1° Os parênteses "()", que é por onde a função recebe os argumentos (assim como nas funções tradicionais):
 2°  seta "=>" - a junção desses dois sinais responsável pelo nome "Arrow"
 3° É as chaves "{}": o bloco de código que representa o corpo da função

*/

// função tradicional
function somar(a, b){
    let total = a + b;
    return console.log(total);
}

somar(10, 30)

// função anônima de subtrair

let subtrair = (valor1, valor2) => {
    let subtracao = valor1 - valor2;
    console.log(subtracao);
}

// Chamndo a função anônima
subtrair(50, 25);

//outro casp de uso

let numeros = [1, 3, 5, 10]

numeros.map((item)=> {    
    console.log(item);
})

