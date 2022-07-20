document.querySelector("input").addEventListener("input", cep);
document.querySelector("#consult").addEventListener("click", consult);
let cepValue;

function cep(event) {
    let input = event.target.value;
    cepValue = input.replace(/\D/g, "");
    let cepFormatado = cepValue.replace(/(\d{5})(\d{3})/, "$1-$2");
    document.querySelector("input").value = cepFormatado;
    if(cepFormatado.length === 9) {
        document.querySelector("button").disabled = false;
    } else {
        document.querySelector("button").disabled = true;
        document.querySelector("#showMap").style.display = "none";
        document.querySelector("iframe").hidden = true;
        document.querySelector("#informations").innerHTML = ``;
    }
}

function consult() {
    document.getElementById("block").style.display = "flex";
    document.querySelector("body").style.cursor = "wait";
    fetch(`https://cep.awesomeapi.com.br/json/${cepValue}`)
    .then(r => r.json())
    .then(cep => {
        if(cep.status === 404) {
            throw new Error;
        }
        document.querySelector("#informations").innerHTML = `
        <table>
            <tr>
                <td>Endereço:</td>
                <td>${cep.address}</td>
            </tr>
            <tr>
                <td>Bairro:</td>
                <td>${cep.district}</td>
            </tr>
            <tr>
                <td>Cidade:</td>
                <td>${cep.city}</td>
            </tr>
            <tr>
                <td>Estado:</td>
                <td>${cep.state}</td>
            </tr>
            <tr>
                <td>Latitude:</td>
                <td>${cep.lat}</td>
            </tr>
            <tr>
                <td>Longitude:</td>
                <td>${cep.lng}</td>
            </tr>
        </table>`;
        document.querySelector("body").style.cursor = "default";
        document.getElementById("block").style.display = "none";
        document.querySelector("#showMap").style.display = "block";
        document.querySelector("#showMap").addEventListener("click", showMap);
        function showMap() {
            document.querySelector("iframe").hidden = false;
            document.querySelector("iframe").src = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d528.5467790691869!2d${cep.lng}!3d${cep.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1644446601650!5m2!1sen!2sbr`;
        }
    })
    .catch(e => {
        document.querySelector("body").style.cursor = "default";
        document.getElementById("block").style.display = "none";
        alert(e + "! CEP inválido!")
    });
}