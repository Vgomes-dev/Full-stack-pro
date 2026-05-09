// Descontruindo arrays e objetos

//objetos

let pessoa = {
    nome: "Matheus",
    sobrenome: "Fraga",
    empresa: "Sujeito Programador",
    cargo: "Programador Full Stack"
};

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

//descontruindo objetos


//renomeando propriedades
let nome = "TESTE";



const { nome:nomePessoa, cargo, empresa, sobrenome } = pessoa;

console.log(nomePessoa);
console.log(sobrenome);
console.log(empresa);
console.log(cargo);

// Arrays

// ==============================

let nomes = ["Matheus", "João", "Maria", "José"];


console.log(nomes);
    // exibindo os itens do array separadamente
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]);


//descontruindo arrays posição + valor

let {0:matheus, 2:terceiraPessoa} = nomes;

console.log(matheus);
console.log(terceiraPessoa);

// outra forma de descontruir arrays o valor sempre é a posição do item no array

let [primeiraPessoa, segundaPessoa] = nomes;

console.log(primeiraPessoa);
console.log(segundaPessoa);