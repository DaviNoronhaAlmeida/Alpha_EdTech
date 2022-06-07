document.querySelector("#button").addEventListener("click", raffle);

function raffle() {
    let result = random();
    let result2 = random2();

    if (result <= 517 && result2 <= 167) {
        document.querySelector("#result").innerHTML = "É uma mulher idosa!";
    } else if (result > 517 && result2 <= 167) {
        document.querySelector("#result").innerHTML = "É um homem idoso!";
    } else if (result <= 517 && result2 > 167) {
        document.querySelector("#result").innerHTML = "É uma mulher não idosa!";
    } else {
        document.querySelector("#result").innerHTML = "É um homem não idoso!";
    }
}

function random() {
    let randomresult = Math.floor(Math.random() * 1000) + 1;
    return randomresult;
} 

function random2() {
    let randomresult = Math.floor(Math.random() * 1000) + 1;
    return randomresult;
} 