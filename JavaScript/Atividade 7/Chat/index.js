document.querySelector("#send").addEventListener("click", send);
document.querySelector("#msg").addEventListener("keyup", send);
document.querySelector("#msg").addEventListener("input", save);
document.querySelector("#clear").addEventListener("click", clear);
let text = "";

function send(e) {
    if(e.key == "Enter" || e.target.id == "send") {
        if (text == "") {
            alert("Digite uma mensagem para enviar!");
        } else {
            document.querySelector("#chat").innerHTML += "Você: " + text + "\n\n";
            document.querySelector("#msg").value = "";
            text = "";
            document.querySelector("#chat").scrollTop = document.querySelector("#chat").scrollHeight;
        }
    }
}

function save() {
    text = document.querySelector("#msg").value;
}

function clear() {
    document.querySelector("#chat").innerHTML = "";
    document.querySelector("#msg").value = "";
}