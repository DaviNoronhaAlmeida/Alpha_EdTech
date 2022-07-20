document.querySelector("#show").addEventListener("click", show);

function show() {
    document.getElementById("block").style.display = "flex";
    document.querySelector("body").style.cursor = "wait";

    let value = document.querySelector("select").value;
    let dateStart = (document.querySelector("#dateStart").value).replace(/-/g, "");
    let dateEnd = (document.querySelector("#dateEnd").value).replace(/-/g, "");

    if(dateStart !== "" || dateEnd !== "") {
        fetch(`https://economia.awesomeapi.com.br/json/daily/${value}/?start_date=${dateStart}&end_date=${dateEnd}`)
        .then(r => r.json())
        .then(b => {
        document.querySelector("body").style.cursor = "default";
        document.getElementById("block").style.display = "none";
        console.log(b)
        });
        
    } else {
        document.querySelector("#information").innerHTML = `Selecione as datas!`
    }
}