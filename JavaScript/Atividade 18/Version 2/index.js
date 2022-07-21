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

        // function pull() {
        //     return fetch(
        //         `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
        //     )
        //         .then((r) => r.json())
        //         .then((data) => data.cards);
        // }
        // let cards = await Promise.all([pull(), pull(), pull(), pull(), pull()]);
        // console.log(cards);

        let cards = [];
        for (let i = 0; i < 5; i++) {
            const card = fetch(
                `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
            ).then((response) => response.json());
            cards.push(card);
        }
        cards = await Promise.all(cards);
        console.log(cards);

        document.querySelector(
            "#result"
        ).innerHTML = `<img src="${cards[0].cards[0].image}" />
        <img src="${cards[1].cards[0].image}" />
        <img src="${cards[2].cards[0].image}" />
        <img src="${cards[3].cards[0].image}" />
        <img src="${cards[4].cards[0].image}" />`;

        document.querySelector("#block").getElementsByClassName.display =
            "none";
        document.querySelector("body").style.cursor = "default";
        document.querySelector("button").disabled = false;
    } catch (error) {
        alert(error);
    }
}
