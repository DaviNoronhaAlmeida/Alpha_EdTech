document.querySelector("input").addEventListener("input", cep);
let input =  document.querySelector("input").value;

function cep(event) {
    let input = event.target.value;
    let cep = input.replace(/\D/g, "");
    let cepFormatado = cep.replace(/(\d{5})(\d{3})/, "$1-$2");
    document.querySelector("input").value = cepFormatado;
}

/*
document.querySelector("input").addEventListener("keypress", cep);

function cep(e) {
    if (!checkChar(e)) {
        e.preventDefault();
    }
}

function checkChar(e) {
    let char = String.fromCharCode(e.keyCode);
    const pattern = '[0-9]';

    if(char.match(pattern)) {
        return true;
    }
}
*/