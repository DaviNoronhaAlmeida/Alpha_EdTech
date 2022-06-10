for (let i = 0; i < 60; i++) {
    document.getElementById('minutes').innerHTML += "<option>" + i + "</option>";
}

for (let i = 0; i < 60; i++) {
    document.getElementById('seconds').innerHTML += "<option>" + i + "</option>";
}

document.querySelector("button").addEventListener("click", start);
const audio = new Audio("./assets/TOP_Alarm.mp3");
let mode = "start";
let alarm;
let minutes;
let seconds;
let countdown;
let actualTime;
let fivePercent;


function start() {
    if (mode === "start") {
        minutes = parseInt(document.getElementById("minutes").value);
        seconds = parseInt(document.getElementById("seconds").value);
        let time = parseFloat((minutes * 60000) + ((seconds + 1) * 1000));
        actualTime = time;
        fivePercent = time * 0.05;
        if(!isNaN(minutes) && !isNaN(seconds)) {
            alarm = setTimeout(alarmsong, time);
            countdown = setInterval(decreaseTime, 1000);
            document.querySelector("button").innerHTML = "Desarmar";
            mode = "desarm";
        } else {
            document.getElementById("text").innerHTML = "Selecione o tempo!";
        }
    } else {
        clearTimeout(alarm);
        audio.pause()
        document.querySelector("button").innerHTML = "Iniciar";
        document.getElementById("text").style.color = "white";
        mode = "start";
        clearInterval(countdown);
    }
} 

function alarmsong() {
    audio.play();
}

function decreaseTime() {
    actualTime -= 1000;
    if (minutes < 10 && seconds < 10) {
        document.getElementById("text").innerHTML = `0${minutes}:0${seconds}`;
    } else if (seconds < 10) {
        document.getElementById("text").innerHTML = `${minutes}:0${seconds}`;
    } else if (minutes < 10) {
        document.getElementById("text").innerHTML = `0${minutes}:${seconds}`;
    } else {
        document.getElementById("text").innerHTML = `${minutes}:${seconds}`;
    }

    if(seconds == 0 && minutes == 0) {
        clearInterval(countdown);
    }
    else if (seconds <= 0) {
        minutes--;
        seconds = 60;
    }
    seconds--;
    if (actualTime <= fivePercent) {
        document.getElementById("text").style.color = "red";
    }
}