// Criando objetos

// objetos

let pessoa = {
    nome: "João",
    idade: 26,
    altura: 1.85,
    cargo: "Desenvolvedor"
};
console.log(pessoa);

// Acessando propriedades do objeto

console.log(pessoa.nome); // João
console.log(pessoa.idade); // 26
console.log(pessoa.altura); // 1.85
console.log(pessoa.cargo); // Desenvolvedor

// outro objeto

let carro = {
    nome: "Golf 1.6",
    cor: "Branco",
    potencia: "140cv",
};
console.log(carro);

// criando lista de objetos

let usuarios = [
    {
        nome: "Matheus",
        cargo: "Programador",
        status: "Ativo"
    },
//criando mais objetos dentro do array
    {
        nome: "Maria",
        cargo: "Backend",
        status: "Ativo"
    },

    {
        nome: "Jose",
        cargo: "RH",
        status: "Ativo"
    }
];

console.log(usuarios);

// acessando propriedades do array de objetos

console.log(usuarios[0].nome); // Matheus
console.log(usuarios[1].cargo); // Backend
console.log(usuarios[2].status); // Ativo

// acessar todo o array de objetos

console.log(usuarios[0]); // { nome: 'Matheus', cargo: 'Programador', status: 'Ativo' }
console.log(usuarios[1]); // { nome: 'Maria', cargo: 'Backend', status: 'Ativo' }
console.log(usuarios[2]); // { nome: 'Jose', cargo: 'RH', status: 'Ativo' }