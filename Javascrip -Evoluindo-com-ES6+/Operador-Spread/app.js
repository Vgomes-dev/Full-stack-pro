// Operador Spread (...)
// usado tanto em objetos quanto em arrays

// operador spread em arrays
let primeirosNumeros = [1, 2, 3];

// usando o operador spread para criar um novo array com os elementos do array 'primeirosNumeros' e adicionando novos elementos meio que é uma concatenacao de arrays, mas sem usar o metodo concat

let numeros = [...primeirosNumeros, 4, 5, 10];

console.log(numeros);

// operador spread em objetos

let pessoa = {
    nome: 'Matheus',
    idade: 45,
    cargo: 'RH'
};

// usando o operador spread (...) e juntando em outro objeto
let novaPessoa = {
    ...pessoa,
    status: 'Ativo',
    cidade: 'Campo Grande / MS',
    telefone: '67 99999-9999'
};

console.log(novaPessoa);

// Usando o operador spread em uma prática diaria

// cadastrando um novo usuario, e usando o operador spread para pegar as informações do usuario e adicionar mais informações
function novoUsuario(info){
    let dados = {
        ...info,
        status: 'Ativo',
        inicio: '20/03/2023',
        codigo: 'D123'
    };
    console.log(dados);
}
// chamando a função novoUsuario e passando um objeto com as informações do usuario, e usando o operador spread para pegar as informações do usuario e adicionar mais informações
novoUsuario({nome: 'José', sobrenome: 'Silva', cargo: 'Desenvolvedor', })