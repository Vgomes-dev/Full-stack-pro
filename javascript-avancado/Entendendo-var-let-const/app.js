// Diferenças entre var, let e const

// var: tem escopo de função, pode ser redeclarada e reatribuída
var nome = "Sujeito";
console.log(nome); // João

if(nome === "Sujeito"){
    var curso = "Programdor Frontend";
    console.log(curso);
}

// let: tem escopo de bloco, pode ser reatribuída, mas não redeclarada

var name = "João";

if(name === "João"){
    let cargo = "Ceo - João Tech";
    console.log(cargo);

}

// verificação de bonificação com let boleana
let bonus = true;

if(bonus === true){
    let salario = 4000 + 600
    console.log(salario);
}else{
    let salario = 4000
    console.log(salario);
}

/// const: tem escopo de bloco, não pode ser redeclarada nem reatribuída  
//imutavel

const profissao = "Programador Backend";
