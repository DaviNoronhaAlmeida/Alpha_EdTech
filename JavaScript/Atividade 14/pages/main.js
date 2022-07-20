export function mainPage() {
    document.getElementById("page").innerHTML = `
    <h1>Doceria</h1>
    <p>O que você gostaria de comer hoje?</p>
    <div>
        <span id="b">Brigadeiro</span>
        <span id="c">Cupcake</span>
        <span id="d">Doces</span>
    </div>`;
    document.getElementById("b").addEventListener("click", brigadeiro)
    function brigadeiro() {
        history.pushState("","","/brigadeiro");
    }
    document.getElementById("c").addEventListener("click", cupcake)
    function cupcake() {
        history.pushState("","","/cupcake");
    }
    document.getElementById("d").addEventListener("click", doces)
    function doces() {
        history.pushState("","","/doces");
    }
}