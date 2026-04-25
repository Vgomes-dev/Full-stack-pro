// Aprendendo Loops

// switch

// Dá para usar o switch para criar um menu de opções, onde o usuário pode escolher uma opção e o programa executa a ação correspondente à opção escolhida

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch( Number(valor)){

        // case é o valor que o usuário digitou, e o break é para sair do switch depois de executar a ação correspondente ao case escolhido
        case 1:
            alert("Você escolheu o 1 = Suco");
            break;
        case 2:
            alert("Você escolheu o 2 = Água gelada");
            break;
        case 3:
            alert("Você escolheu o 3 = Sorvete");
            break;
        case 4:
            alert("Você chamou o garçom!");
            break;

            // default é o valor que será executado caso o usuário digite um valor diferente dos cases definidos
        default:
            alert("Valor inválido! Digite um valor de 1 a 4");
            break;
        }
}

// dá para usar o switch com strings também, por exemplo, para criar um menu de opções onde o usuário pode escolher uma opção digitando o nome da opção

/*
function pedir2(){
    var valor = prompt("Digite uma opção: suco, água, sorvete ou garçom");

    switch( valor.toLowerCase()){

        case "suco":
            alert("Você escolheu o suco");
            break;
        case "água":
            alert("Você escolheu a água gelada");
            break;
        case "sorvete":
            alert("Você escolheu o sorvete");
            break;
        case "garçom":
            alert("Você chamou o garçom!");
            break;

        default:
            alert("Valor inválido! Digite uma opção: suco, água, sorvete ou garçom");
            break;
    };
}
*/