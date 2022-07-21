document.querySelector("button").addEventListener("click", pullCards);

async function shuffleDeck() {
    try {
        const deck = await fetch(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        );
        const shuffledDeck = await deck.json();

        if (!shuffledDeck.success === true) {
            throw "Failed shuffle deck!";
        }

        return shuffledDeck;
    } catch (error) {
        return Promise.reject(error);
    }
}

async function pullCards() {
    try {
        document.querySelector("#result").innerHTML = ``;
        document.querySelector("#block").getElementsByClassName.display =
            "block";
        document.querySelector("body").style.cursor = "wait";
        document.querySelector("button").disabled = true;

        const deck = await shuffleDeck();

        for (let i = 0; i < 5; i++) {
            let pull = await fetch(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
            );
            let cards = await pull.json();

            if (!cards.success === true) {
                throw "Failed pull cards!";
            }

            document.querySelector(
                "#result"
            ).innerHTML += `<img src="${cards.cards[0].image}" />`;
        }

        document.querySelector("#block").getElementsByClassName.display =
            "none";
        document.querySelector("body").style.cursor = "default";
        document.querySelector("button").disabled = false;
    } catch (error) {
        alert(error);
    }
}
