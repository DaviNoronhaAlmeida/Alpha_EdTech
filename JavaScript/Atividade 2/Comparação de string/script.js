document.querySelector('button').addEventListener("click", comparar);

function comparar() {
    let s1 = document.getElementById("string1").value;
    let s2 = document.getElementById("string2").value;

    if (s1.length === 0 || s2.length === 0) {
        document.getElementById("result").innerHTML = "Digite as strings!";
    }
    else if (s1.length > s2.length) {
        document.getElementById("result").innerHTML = "A primeira string é maior que a segunda string!";
    }
    else if (s1.length < s2.length) {
        document.getElementById("result").innerHTML = "A primeira string é menor que a segunda string!";
    }
    else if (s1.length === s2.length) {
        document.getElementById("result").innerHTML = "A primeira string tem o mesmo tamanho da segunda string!";
    }
}