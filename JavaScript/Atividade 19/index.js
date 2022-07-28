document.querySelector("#reset").addEventListener("click", reset);
window.addEventListener("load", reset);

function reset() {
    clearInterval(sort);
    const p1 = createCard();
    const p2 = createCard();
    const p3 = createCard();
    p1.listCard(1);
    p2.listCard(2);
    p3.listCard(3);

    const cardNumbers = document.querySelectorAll("td");
    for (let i = 0; i < 10; i++) {
        cardNumbers[i].addEventListener("click", p1.mark);
        cardNumbers[i].addEventListener("click", p1.winner);
    }
    for (let i = 10; i < 20; i++) {
        cardNumbers[i].addEventListener("click", p2.mark);
        cardNumbers[i].addEventListener("click", p2.winner);
    }
    for (let i = 20; i < 30; i++) {
        cardNumbers[i].addEventListener("click", p3.mark);
        cardNumbers[i].addEventListener("click", p3.winner);
    }

    document.querySelector("#result").textContent = "";
    document.querySelector("#raffle").textContent = ``;
    document.querySelector("#start").disabled = false;
}

function createCard() {
    const card = [];
    for (let i = 0; i < 10; i++) {
        const n = parseInt(Math.random() * (75 - 1 + 1)) + 1;
        card.push(n);
        for (let j = 0; j < card.length - 1; j++) {
            if (card[i] === card[j]) {
                const n2 = parseInt(Math.random() * (75 - 1 + 1)) + 1;
                card.splice(i, 1, n2);
            }
        }
    }
    card.sort((a, b) => {
        return a - b;
    });

    function listCard(n) {
        return (document.querySelector(`#card${n}`).innerHTML = `
            <tr>
                <th colspan="5">Cartela ${n}<th>
            </tr>
            <tr>
                <td data-id="${n}">${card[0]}</td>
                <td data-id="${n}">${card[1]}</td>
                <td data-id="${n}">${card[2]}</td>
                <td data-id="${n}">${card[3]}</td>
                <td data-id="${n}">${card[4]}</td>
            </tr>
            <tr>
                <td data-id="${n}">${card[5]}</td>
                <td data-id="${n}">${card[6]}</td>
                <td data-id="${n}">${card[7]}</td>
                <td data-id="${n}">${card[8]}</td>
                <td data-id="${n}">${card[9]}</td>
            </tr>`);
    }

    function mark(e) {
        if (document.querySelector("#result").textContent !== "") {
            return;
        }
        if (e.target.style.backgroundColor === "rgb(123, 223, 109)") {
            return;
        }

        if (
            e.target.textContent ===
            document.querySelector("#raffle").textContent
        ) {
            e.target.style.backgroundColor = "rgb(123, 223, 109)";
            for (let i = 0; i < card.length; i++) {
                if (e.target.textContent == card[i]) {
                    card.splice(i, 1);
                }
            }
        }
    }

    function winner(w) {
        if (card.length === 0) {
            clearInterval(sort);
            return (document.querySelector(
                "#result"
            ).textContent = `O vencedor é a cartela ${w.target.dataset.id}!`);
        }
    }

    return { listCard, mark, winner };
}

document.querySelector("#start").addEventListener("click", start);
let sort;

function start() {
    const r = raffle(75, 1);
    r();
    sort = setInterval(r, 5000);
    document.querySelector("#start").disabled = true;
}

function raffle(max, min) {
    const sortedNumber = [];
    for (let i = min; i <= max; i++) {
        sortedNumber.push(i);
    }

    function sortNumber() {
        const n = parseInt(Math.random() * sortedNumber.length);
        document.querySelector("#raffle").textContent = `${sortedNumber[n]}`;
        sortedNumber.splice(n, 1);

        if (sortedNumber.length === 0) {
            clearInterval(sort);
            return (document.querySelector(
                "#result"
            ).textContent = `O vencedor é... ninguém?`);
        }
    }

    return sortNumber;
}
