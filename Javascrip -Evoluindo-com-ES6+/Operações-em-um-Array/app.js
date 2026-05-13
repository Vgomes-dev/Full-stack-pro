// MAP = percorrer todo um array

let lista = ['Matheus',  'Jose', 'Maria', 'Lucas', 'Valdirene'];

lista.map((item, index)=> {

    // O item é todos os valores que estiverem dentro da Array, 
    console.log(`PASSANDO: ${item} - ESTÁ NA POSIÇÃO: ${index}`)
})

// Reduce = O reduce busca reduzir um array

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`);

    console.log(`${numero} - Valor atual`);
    // indice = posição atual é o index
    console.log(`${indice} - Índice atual`);
    // original = valor que está dentro da arraz original no caso (numeros)
    console.log(`${original} - array`);
    console.log("===============================================")

    // somando todos os itens da array
    return acumulador += numero;
})

console.log("TOTAL DO REDUCE: " + total);

console.log("===============================================")


// FIND = Faz uma busca em uma lista e só retorna 1 primeiro que ele encontrar mesmo ele tendo itens com o mesmo valor
let listagem = [3, 5, "José", 2, "Matheus"];

let busca = listagem.find((item) => {
    //return item === "José"

    if(item === "José"){
        return console.log("ITEM ENCONTRADO COM SUCESSO!")
    }
})

// caso não teha o item por não existir ou por digitação errada ele retornará undefine/indefinido
console.log(busca)

// FILTER = para filtrar itens de uma array

let palavras = ["Mathues", "Ana", "Jose", "Ricardo Silva", "Sujeito Programador"];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);