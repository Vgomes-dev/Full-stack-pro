// Template strings
let nome = "João";
let idade = 26;


// Jeito antigo de concatenar strings
// let mensagem1 = "Olá, meu nome é " + nome + " e tenho " + idade + " anos.";

// Usando template strings (template literals) sempre que usar aspas simples ou duplas, é necessário usar o operador de concatenação (+) para juntar as variáveis com o texto. Com template strings, basta usar crases (`) e inserir as variáveis diretamente dentro do texto usando a sintaxe ${variável}.

//temlate string correto
let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;

console.log(mensagem);