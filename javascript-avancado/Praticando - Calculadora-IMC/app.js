/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso normal
Entre 25 e 29,99 Acima do peso
Entre 30 e 34,99 Obesidade I
Entre 35 e 39,99 Obesidade II (severa)
Acima de 40 Obesidade III (mórbida)
*/

// peso / altura * altura


// Armazenando o valor do peso e da altura em variáveis predefinidas para o uso na função
    var peso;
    var altura;
    var imc;
    var resultado;

// criando uma fuction para calcular o imc

function calcular(event){
    
    // mudando o evento de submit para evitar que a página seja recarregada
    event.preventDefault();

    // Mudando o funcionamento do input para pegar o valor do peso e da altura com o id do input
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    // calculando o imc
    // usando toFixed(2) para limitar o número de casas decimais depois da vírgula
    imc = peso / (altura * altura);

    if(imc < 17){
        resultado = "Muito abaixo do peso";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc + '<br/> cuidado, você está muito abaixo do peso! ';
    }else if(imc > 17 && imc <= 18.49){
        resultado = "Abaixo do peso";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> você está abaixo do peso! ';
    }else if(imc >= 18.5 && imc <= 24.99){
        resultado = "Peso normal";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> você está com o peso normal! ';
    }else if(imc >= 25 && imc <= 29.99){
        resultado = "Acima do peso";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> você está acima do peso! ';
    }else if(imc >= 30 && imc <= 34.99){
        resultado = "Obesidade I";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> cuidado, você está com obesidade Nivel I! ';
    } else if(imc >=  35 && imc <= 39.99){
        resultado = "Obesidade II";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> cuidado, você está com obesidade Nivel II! ';
    } else {
        resultado = "Obesidade III";
        document.getElementById("resultado").innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> cuidado, você está com obesidade Nivel III! ';
    }

    //limpando os campos de peso e altura depois do cálculo
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}