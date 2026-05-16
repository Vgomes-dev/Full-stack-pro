// Metodos includes, endswith startsWith

// includes sempre devolve em boleano true or false
// include é usado como um for
let nomes = ["Matheus", "Lucas", "Jose"];

console.log(nomes.includes("Lucas"))

// Lembrando que o includes é case sensitive então tem que ser coloca eatamente como está na array/var
if(nomes.includes("Matheus")){
    console.log("Está na lista")
}else{
    console.log("Não está na lista")
};

// startSwith verifica se algum texto começa com o que passar
let pessoas = "Matheus";

//verificando ele devolve um boleano de true or false
// Lembrando que também é case sensitive que tem que ser exatamente oq foi passado na string/var/array
console.log(pessoas.startsWith("Math"));

//endsWith verifica a parte final do conteudo da string/var/array
// tmbém entrega um resultado boleano
console.log(pessoas.endsWith("eus"));