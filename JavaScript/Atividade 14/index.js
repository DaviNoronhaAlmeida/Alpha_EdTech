import  * as main  from "./pages/main.js";
import  brigadeiroPage  from "./pages/brigadeiro.js";
import  cupcakePage  from "./pages/cupcake.js";
import  docesPage  from "./pages/doces.js";

window.addEventListener("load", main.mainPage);
window.addEventListener("click", trade)
function trade() {
    if(window.location.href === "http://127.0.0.1:5500/JavaScript/Atividade%2014/index.html") {
        main.mainPage();
    } else if(window.location.href === "http://127.0.0.1:5500/brigadeiro") {
        brigadeiroPage();
    } else if(window.location.href === "http://127.0.0.1:5500/cupcake") {
        cupcakePage();
    } else if(window.location.href === "http://127.0.0.1:5500/doces") {
        docesPage();
    }
}
