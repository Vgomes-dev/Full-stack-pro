// Condicionais e comparação

// IF é como se fosse um "SE" em português exemplo: IF = SE o valor for igual a 30, faça isso...

var valor = 35;

if (valor == 30){
    console.log("SIM O VALOR É IGUAL A 30")

    //Else é como se fosse um "SENÃO" em português exemplo: ELSE = SENÃO o valor for maior que 30, faça isso...
} else {
    console.log("NÃO O VALOR NÃO É IGUAL A 30")
}

//outra condições como > maior, < menor, >= maior ou igual, <= menor ou igual, != diferente

var valor2 = 25;

if (valor2 > 30){
    console.log("O VALOR É MAIOR QUE 30")

    //else if é como se fosse um "SENÃO SE" em português exemplo: ELSE IF = SENÃO SE o valor for menor que 30, faça isso...
} else if (valor2 < 30){
    console.log("O VALOR É MENOR QUE 30")
} else {
    console.log("O VALOR É IGUAL A 30")
}