document.querySelector('button').addEventListener("click", calcular);
let x = 0;
let y = 0;
let result;
let z = 0;

function calcular() {
    let n1 = parseFloat(document.querySelector("#n1").value);
    let n2 = parseFloat(document.querySelector("#n2").value);
    x = 0;
    y = 0;
    z = 0;
    if(n1 === parseInt(n1) && n2 === parseInt(n2))
    switch(document.querySelector("select").value){
        case "add":
            result = add(n1, n2);
            document.getElementById("result").textContent = `The result is ${result}`;
            break;
        case "subtract":
            if(n1 < n2) {
                document.getElementById("result").textContent = `Impossible to subtract ${n1} - ${n2}`;
            } else {
                subtract(n1, n2);
                document.getElementById("result").textContent = `The result is ${x}`;
            }
            break;
        case "multiply":
            multiply(n1, n2);
            document.getElementById("result").textContent = `The result is ${y}`;
            break;
        case "exponential":
            if (n2 === 1) {
                document.getElementById("result").textContent = `The result is ${n1}`;
            } else if (n2 === 0) {
                document.getElementById("result").textContent = `The result is 1`;
            } else {
                exponential(n1, n2);
                document.getElementById("result").textContent = `The result is ${y}`;
            } 
            break;
        case "division":
            if (n2 === 0) {
                document.getElementById("result").textContent = `Division by zero`;
            } else {
                division(n1, n2);
                document.getElementById("result").textContent = `The result is ${x}`;
            }
            break;            
    } else {
        document.getElementById("result").textContent = `Impossible to do that. Numbers must be integers!`;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (add(b, x) === a) {
        return x;
    } else {
        x = add(x, 1);
        subtract(a, b);
    }
}

function multiply(a, b) {
    if (x < b) {
        y = add(y, a);
        x = add(x, 1)
        multiply(a, b);
    } else {
        return y;
    }
}

function exponential(a, b) {
    if (z === 0) {
        z = a;
        exponential(a, b)
    }
    else if(b > 1) {
        z = multiply(z, a);
        b--;
        console.log(a, b, z)
        exponential(a, b);
    } else {
        return z;
    }
    
}

function division(a, b) {
    if(multiply(x, b) === a) {
       return x;
    } else {
        x++;
        division(a, b);
    }
}