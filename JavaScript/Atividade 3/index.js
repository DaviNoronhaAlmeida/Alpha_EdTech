document.querySelector('button').addEventListener("click", calcular);

function calcular() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    let result = parseFloat();

    if(!window.isNaN(n1) && !window.isNaN(n2)) {
        switch(document.querySelector("select").value){
            case "add":
                result = n1 + n2;
                console.log(result);
                document.getElementById("result").innerHTML = "O resultado é " + result ;
                break;
            case "subtract":
                result = n1 - n2;
                console.log(result);
                document.getElementById("result").innerHTML = "O resultado é " + result ;
                break;
            case "multiply":
                result = n1 * n2;
                console.log(result);
                document.getElementById("result").innerHTML = "O resultado é " + result ;
                break;
            case "division":
                result = n1 / n2;
                console.log(result);
                document.getElementById("result").innerHTML = "O resultado é " + result ;
                break;            
            }
    }
    else {
        document.getElementById("result").innerHTML = "Digite os números!";
    }
}