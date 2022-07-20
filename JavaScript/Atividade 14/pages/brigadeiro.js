export default function brigadeiroPage() {
    document.getElementById("page").innerHTML = `
    <h1>Brigadeiro</h1>
    <p>Vai um brigadeiro?</p>
    <div>
        <span>Comprar</span>
        <span id="v">Voltar</span>
    </div>`;
    document.getElementById("v").addEventListener("click", back)
    function back() {
        history.pushState("","","http://127.0.0.1:5500/JavaScript/Atividade%2014/index.html");
    }
}