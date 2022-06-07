document.querySelector("#button").addEventListener("click", raffle);

function raffle() {
    let vmin = parseInt(document.querySelector("#vmin").value);
    let vmax = parseInt(document.querySelector("#vmax").value) + 1;
    let result;

    if(vmin > vmax) {
        document.querySelector("#result").innerHTML = "Erro! Valor mínimo maior que o valor máximo.";
    } else if (!isNaN(vmin) && !isNaN(vmax)) {
        result = random(vmin, vmax);
        document.querySelector("#result").innerHTML = "O número sorteado foi " + result;
    } else {
        document.querySelector("#result").innerHTML = "Os valores inseridos não são numéricos!";
    }
}

function random(min, max) {
    let result = Math.floor(Math.random() * (max - min) ) + min ;
    return result;
}