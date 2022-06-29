document.querySelector("#reset").addEventListener("click", reset)
const button = document.querySelectorAll(".elemento");
let X = true;
document.getElementById("result").textContent = "É a vez de X";
let squares = [['','',''],['','',''],['','','']];

for(let i = 0; i <= 8; i++) {
    button[i].addEventListener("click", play);
}

function play(e) {
    if(e.target.innerHTML === "") {
        if(X) {
            e.target.innerHTML = "X";
            X = false;
            if(e.target.dataset.row === "A") {
                if(e.target.dataset.column === "0") {
                    squares[0].splice(0, 1, "X");
                } else if(e.target.dataset.column === "1") {
                    squares[0].splice(1, 1, "X");
                } else {
                    squares[0].splice(2, 1, "X");
                }
            }
            if(e.target.dataset.row === "B") {
                if(e.target.dataset.column === "0") {
                    squares[1].splice(0, 1, "X");
                } else if(e.target.dataset.column === "1") {
                    squares[1].splice(1, 1, "X");
                } else {
                    squares[1].splice(2, 1, "X");
                }
            }
            if(e.target.dataset.row === "C") {
                if(e.target.dataset.column === "0") {
                    squares[2].splice(0, 1, "X");
                } else if(e.target.dataset.column === "1") {
                    squares[2].splice(1, 1, "X");
                } else {
                    squares[2].splice(2, 1, "X");
                }
            }
            document.getElementById("result").textContent = "É a vez de O";
        } else if (X === false){
            e.target.innerHTML = "O";
            X = true;
            if(e.target.dataset.row === "A") {
                if(e.target.dataset.column === "0") {
                    squares[0].splice(0, 1, "O");
                } else if(e.target.dataset.column === "1") {
                    squares[0].splice(1, 1, "O");
                } else {
                    squares[0].splice(2, 1, "O");
                }
            }
            if(e.target.dataset.row === "B") {
                if(e.target.dataset.column === "0") {
                    squares[1].splice(0, 1, "O");
                } else if(e.target.dataset.column === "1") {
                    squares[1].splice(1, 1, "O");
                } else {
                    squares[1].splice(2, 1, "O");
                }
            }
            if(e.target.dataset.row === "C") {
                if(e.target.dataset.column === "0") {
                    squares[2].splice(0, 1, "O");
                } else if(e.target.dataset.column === "1") {
                    squares[2].splice(1, 1, "O");
                } else {
                    squares[2].splice(2, 1, "O");
                }
            }
            document.getElementById("result").textContent = "É a vez de X";
        }
    }
    winner();
}

function winner() {
    if(squares[0][0] !== '' && squares[0][1] !== '' && squares[0][2] !== '' && squares[1][0] !== '' && squares[1][1] !== '' && squares[1][2] !== '' && squares[2][0] !== '' && squares[2][1] !== '' && squares[2][2] !== '') {
        document.getElementById("result").textContent = `Empate`;
    }
    if(squares[0][0] !== '' && squares[0][1] !== '' && squares[0][2] !== '') {
        if(squares[0][0] === squares[0][1] && squares[0][1] === squares[0][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[0][0]}`;
            X = 0;
        }
    }
    if(squares[1][0] !== '' && squares[1][1] !== '' && squares[1][2] !== '') {
        if(squares[1][0] === squares[1][1] && squares[1][1] === squares[1][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[1][0]}`;
            X = 0;
        }
    }
    if(squares[2][0] !== '' && squares[2][1] !== '' && squares[2][2] !== '') {
        if(squares[2][0] === squares[2][1] && squares[2][1] === squares[2][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[2][0]}`;
            X = 0;
        }
    }
    if(squares[0][0] !== '' && squares[1][0] !== '' && squares[2][0] !== '') {
        if(squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[0][0]}`;
            X = 0;
        }
    }
    if(squares[0][1] !== '' && squares[1][1] !== '' && squares[2][1] !== '') {
        if(squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[0][1]}`;
            X = 0;
        }
    }
    if(squares[0][2] !== '' && squares[1][2] !== '' && squares[2][2] !== '') {
        if(squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[0][2]}`;
            X = 0;
        }
    }
    if(squares[0][0] !== '' && squares[1][1] !== '' && squares[2][2] !== '') {
        if(squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[0][0]}`;
            X = 0;
        }
    }
    if(squares[2][0] !== '' && squares[1][1] !== '' && squares[0][2] !== '') {
        if(squares[2][0] === squares[1][1] && squares[1][1] === squares[0][2]) {
            document.getElementById("result").textContent = `O vencedor é ${squares[2][0]}`;
            X = 0;
        }
    }
}

function reset() {
    for(let i = 0; i <= 8; i++) {
        button[i].innerHTML = ""
    }
    squares = [['','',''],['','',''],['','','']];
    document.getElementById("result").textContent = "É a vez de X";
    X = true;
}