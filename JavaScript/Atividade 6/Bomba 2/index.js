document.querySelector("img").addEventListener("click", desarm);

const timer = setTimeout(explosion, 60000);
let countdown = setInterval(timerVisible, 1000);
const ticsong = setInterval(CountdownSong, 1000)
let seconds = 60;
const audio = new Audio('../assets for bombs/beep-07.wav');

function explosion() {
    const audio = new Audio('../assets for bombs/bomb-02.wav');
    audio.play();
    document.querySelector("section").innerHTML = "<img src='../assets for bombs/Explosao.jpg' />";
    clearInterval(countdown);
    clearInterval(ticsong);
}

function timerVisible() {
    seconds--;
    document.querySelector("#countdown").innerHTML = seconds;
}

function CountdownSong() {
    audio.play();
}

function desarm() {
    document.querySelector("img").src = "../assets for bombs/bomba-apagado.jpg";
    clearTimeout(timer);
    clearInterval(countdown);
    clearInterval(ticsong);
}