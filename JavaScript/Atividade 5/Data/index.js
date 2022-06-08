document.querySelector("#button").addEventListener("click", showDate);

function showDate() {
    let date = new Date(document.getElementById("date1").value + " ");
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayweek = date.getDay();
    let miliseconds = date.getTime()

    if (date != "Invalid Date") {
        document.getElementById("result").innerHTML = "Dia: " + day;
        document.getElementById("result2").innerHTML = "Mês: " + month;
        document.getElementById("result3").innerHTML = "Ano: " + year;
        document.getElementById("result6").innerHTML = "Em milisegundos: " + miliseconds;
    } else {
        document.getElementById("result").innerHTML = "Insira uma data!";
    }
    
    switch (dayweek) {
        case 0:
            document.getElementById("result4").innerHTML = "Domingo";
            break;
        case 1:
            document.getElementById("result4").innerHTML = "Segunda-feira";
            break;
        case 2:
            document.getElementById("result4").innerHTML = "Terça-feira";
            break;
        case 3:
            document.getElementById("result4").innerHTML = "Quarta-feira";
            break;
        case 4:
            document.getElementById("result4").innerHTML = "Quinta-feira";
            break;
        case 5:
            document.getElementById("result4").innerHTML = "Sexta-feira";
            break;
        case 6:
            document.getElementById("result4").innerHTML = "Sábado";
            break;
    }

    switch (month) {
        case 1:
            document.getElementById("result5").innerHTML = "Janeiro";
            break;
        case 2:
            document.getElementById("result5").innerHTML = "Fevereiro";
            break;
        case 3:
            document.getElementById("result5").innerHTML = "Março";
            break;
        case 4:
            document.getElementById("result5").innerHTML = "Abril";
            break;
        case 5:
            document.getElementById("result5").innerHTML = "Maio";
            break;
        case 6:
            document.getElementById("result5").innerHTML = "Junho";
            break;
        case 7:
            document.getElementById("result5").innerHTML = "Julho";
            break;
        case 8:
            document.getElementById("result5").innerHTML = "Agosto";
            break;
        case 9:
            document.getElementById("result5").innerHTML = "Setembro";
            break;
        case 10:
            document.getElementById("result5").innerHTML = "Outubro";
            break;
        case 11:
            document.getElementById("result5").innerHTML = "Novembro";
            break;
        case 12:
            document.getElementById("result5").innerHTML = "Dezembro";
            break;
    }
}