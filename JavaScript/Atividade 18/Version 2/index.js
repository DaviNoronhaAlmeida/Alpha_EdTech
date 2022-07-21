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

        // function p() {
        //     return fetch(
        //         `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
        //     ).then((r) => r.json());
        // }
        // let c = p();
        // let d = p();
        // let e = p();
        // let f = p();
        // let g = p();
        // let cards = await Promise.all([c, d, e, f, g]);

        let cards = [];
        for (let i = 0; i < 5; i++) {
            const card = fetch(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
            ).then((response) => response.json());
            cards.push(card);
        }
        cards = await Promise.all(cards);
        console.log(cards);

        document.querySelector("#block").getElementsByClassName.display =
            "none";
        document.querySelector("body").style.cursor = "default";
        document.querySelector("button").disabled = false;
    } catch (error) {
        alert(error);
    }
}
