document.querySelector("#button").addEventListener("click", round);

function round() {
    let n1 = parseFloat(document.querySelector("#n1").value.replace(",","."));
    let low = Math.floor(n1);
    let high = Math.ceil(n1);

    if (!isNaN(n1)) {
        document.querySelector("#result").innerHTML = "O menor número inteiro desse valor é " + low + " !"; 
        document.querySelector("#result2").innerHTML = "O maior número inteiro desse valor é " + high + " !"; 
    } else {
        document.querySelector("#result").innerHTML = "Erro! Valor inserido não é numérico."
    }
}