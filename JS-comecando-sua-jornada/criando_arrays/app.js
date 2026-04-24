// criando Arrays

var lista = ["Lucas", "José", "Maria", 150];


// Imprimindo o Array completo
console.log(lista); // Output: ["Lucas", "José", "Maria", 150]

// Acessando elementos do Array 
console.log(lista[0]); // Output: Lucas
console.log(lista[1]); // Output: José
console.log(lista[2]); // Output: Maria
console.log(lista[3]); // Output: 150

//manipulando Arrays

// pesquisando elementos de uma Array
lista.indexOf("Maria");

// Alterando elementos de uma Array
lista[1] = "José Silva";

console.log(lista[1]); // imprimindo o elemento alterado do Array

lista[3] = 500;

console.log(lista[3]); // imprimindo o elemento alterado do Array

// Adicionando elementos a uma Array
lista.push("Matheus");
console.log(lista); // Output: ["Lucas", "José", "José Silva", 500, "Matheus"]

// Removendo elementos de uma Array
lista.shift(0); // Remove o primeiro elemento do Array
console.log(lista); // Output: ["José", "José Silva", 500, "Matheus"]

// Removendo o último elemento do Array
lista.pop();
console.log(lista); // Output: ["José", "José Silva", 500]

// Retornando lista com espaçamentos ou caracteres específicos (, . ; : - etc)
lista.join(";");
console.log(lista); // Output: "José;José Silva;500"