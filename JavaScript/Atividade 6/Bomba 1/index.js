document.querySelector("img").addEventListener("click", desarm);
const timer = setTimeout(explosion, 10000);

function explosion() {
    const audio = new Audio('../assets for bombs/bomb-02.wav');
    audio.play();
    document.querySelector("section").innerHTML = "<img src='../assets for bombs/Explosao.jpg' />";
}

function desarm() {
    document.querySelector("section").innerHTML = "<img src='../assets for bombs/bomba-apagado.jpg' />";
    clearTimeout(timer);
}