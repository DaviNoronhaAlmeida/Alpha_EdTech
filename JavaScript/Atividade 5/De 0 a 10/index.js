document.querySelector("#button").addEventListener("click", write);

function write() {
    let n1 = Number(document.querySelector("#n1").value);

    switch (n1) {
        case 1:
            document.querySelector("#result").innerHTML = "Um";
            break;
        case 2:
            document.querySelector("#result").innerHTML = "Dois";
            break;
        case 3:
            document.querySelector("#result").innerHTML = "Três";
            break;
        case 4:
            document.querySelector("#result").innerHTML = "Quatro";
            break;
        case 5:
            document.querySelector("#result").innerHTML = "Cinco";
            break;
        case 6:
            document.querySelector("#result").innerHTML = "Seis";
            break;
        case 7:
            document.querySelector("#result").innerHTML = "Sete";
            break;
        case 8:
            document.querySelector("#result").innerHTML = "Oito";
            break;
        case 9:
            document.querySelector("#result").innerHTML = "Nove";
            break;
        case 10:
            document.querySelector("#result").innerHTML = "Dez";
            break;
        default:
            document.querySelector("#result").innerHTML = "Digite um número inteiro entre 0 e 10 !";
    }
}