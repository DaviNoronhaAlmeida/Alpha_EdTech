document.querySelector('button').addEventListener("click", comparar);

function comparar() {
    let n1 = parseFloat(document.getElementById('number1').value);
    let n2 = parseFloat(document.getElementById('number2').value);

    if (n1 === n2) {
       document.getElementById('result').innerHTML = n1 + ' é igual a ' + n2;
    }
    else if (n1 > n2) {
        document.getElementById('result').innerHTML = n1 + ' é maior que ' + n2;
    }
    else if (n1 < n2){
        document.getElementById('result').innerHTML =  n1 + ' é menor que ' + n2;
    }
    else {
        document.getElementById('result').innerHTML = 'Digite os números!';
    }
}