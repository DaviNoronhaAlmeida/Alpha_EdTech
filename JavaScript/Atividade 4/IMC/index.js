document.querySelector("#button").addEventListener("click", calculate);

function calculate() {
    let weight = document.querySelector("#weight").value.replace(",",".");
    let height = document.querySelector("#height").value.replace(",",".");
    let result = "";

    if(!isNaN(weight) && !isNaN(height)) {
        result = weight / (height * height);
        if(result < 18.5) {
            document.querySelector("#result").innerHTML = "Seu IMC é de " + result.toFixed(2) + " . Você está abaixo do peso!";
        } else if (18.5 <= result && result <= 24.9) {
            document.querySelector("#result").innerHTML = "Seu IMC é de " + result.toFixed(2) + " . Você está no peso normal!";
        } else if (25 <= result && result <= 29.9 ) {
            document.querySelector("#result").innerHTML = "Seu IMC é de " + result.toFixed(2) + " . Você está no sobrepeso!";
        } else if (30 <= result) {
            document.querySelector("#result").innerHTML = "Seu IMC é de " + result.toFixed(2) + " . Você está com obesidade!";
        } else if (isNaN(result)) {
            document.querySelector("#result").innerHTML = "Insira o peso e a altura!";
        }

    } else {
        document.querySelector("#result").innerHTML = "Os valores inseridos não são válidos!";
    }
}