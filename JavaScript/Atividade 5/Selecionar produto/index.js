document.querySelector("#button").addEventListener("click", showimage);

function showimage() {
    switch (document.querySelector("select").value) {
        case "p1":
            document.querySelector("#result").innerHTML = "<img src='./assets/playstation-1.webp' />";
            break;
        case "p2":
            document.querySelector("#result").innerHTML = "<img src='./assets/playstation-2.webp' />";
            break;
        case "p3":
            document.querySelector("#result").innerHTML = "<img src='./assets/playStation-3.jpg' />";
            break;
        case "p4":
            document.querySelector("#result").innerHTML = "<img src='./assets/playstation-4.jpg' />";
            break;
        case "p5":
            document.querySelector("#result").innerHTML = "<img src='./assets/playstation-5.jpg' />";
            break;
        default:
            document.querySelector("#result").innerHTML = "Selecione um produto!";
    }
}