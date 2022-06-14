document.querySelector("button").addEventListener("click", convert);

function convert() {
    let text = document.querySelector("textarea").value;
    try {
        let obj = JSON.parse(text);
        console.log(obj);
        document.querySelector("#result").textContent = "Parsable JSON string!";
    } catch {
        document.querySelector("#result").textContent = "Not parsable JSON string!";
    }
}