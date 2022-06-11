document.querySelector("select").addEventListener("change", showcar);

function showcar() {
    switch (document.querySelector("select").value) {
        case "car1":
            document.querySelector("#image").innerHTML = "<img src='./assets/audi.webp' />";
            document.querySelector("#name").innerHTML = "Nome: Audi R8 5.2 Performance S-Tronic Quattro 2022";
            document.querySelector("#manufacturer").innerHTML = "Fabricante: Volkswagen";
            document.querySelector("#maxspeed").innerHTML = "Velocidade máxima: 330Km/h";
            document.querySelector("#timeto100").innerHTML = "0-100Km: 3,2s";
            break;
        case "car2":
            document.querySelector("#image").innerHTML = "<img src='./assets/ferrari.webp' />";
            document.querySelector("#name").innerHTML = "Nome: Ferrari 458 Italia 4.5 V8 2015";
            document.querySelector("#manufacturer").innerHTML = "Fabricante: Fiat";
            document.querySelector("#maxspeed").innerHTML = "Velocidade máxima: 325Km";
            document.querySelector("#timeto100").innerHTML = "0-100Km: 3,4s";
            break;
        case "car3":
            document.querySelector("#image").innerHTML = "<img src='./assets/fiat_uno.png' />";
            document.querySelector("#name").innerHTML = "Nome: Fiat Uno Mille Fire Economy 1.0 (Flex) 4p 2010";
            document.querySelector("#manufacturer").innerHTML = "Fabricante: Fiat";
            document.querySelector("#maxspeed").innerHTML = "Velocidade máxima: 153Km";
            document.querySelector("#timeto100").innerHTML = "0-100Km: 14,7s";
            break;
        case "car4":
            document.querySelector("#image").innerHTML = "<img src='./assets/lamborghini.webp' />";
            document.querySelector("#name").innerHTML = "Nome: Lamborghini Aventador LP700-4 Roadster 6.5 V12 2016";
            document.querySelector("#manufacturer").innerHTML = "Fabricante: Lamborghini";
            document.querySelector("#maxspeed").innerHTML = "Velocidade máxima: 350Km";
            document.querySelector("#timeto100").innerHTML = "0-100Km: 3s";
            break;
        case "car5":
            document.querySelector("#image").innerHTML = "<img src='./assets/braia.jpg' />";
            document.querySelector("#name").innerHTML = "Nome: Nissan Skyline GTR R34";
            document.querySelector("#manufacturer").innerHTML = "Fabricante: Nissan";
            document.querySelector("#maxspeed").innerHTML = "Velocidade máxima: 320Km";
            document.querySelector("#timeto100").innerHTML = "0-100Km: 5,4s";
            alert("Droga! É o Braia!");
    }
}