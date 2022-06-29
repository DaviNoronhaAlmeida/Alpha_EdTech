document.querySelector("#calculate").addEventListener("click", calculate);
document.querySelector("#primeNumber").addEventListener("click", primeNumber);
document.querySelector("#PI").addEventListener("click", showPI);
document.querySelector("#pokerCards").addEventListener("click", pullCards);

function calculate() {
    try {
        const n = document.querySelector("#value").value;
        let result = BigInt(n);
        if (n < 0 || n == "") {
            throw new Error;
        } else if (n == 0) {
            document.querySelector("#result").innerHTML = `O resultado é 1`;
        } else {
            for (let i = BigInt(1); i < n; i++) {
                result *= i;
            }
            document.querySelector("#result").innerHTML = `O resultado é ${result}`;
        }
    } catch (error) {
        document.querySelector("#result").innerHTML = `Digite apenas números inteiros positivos!`;
    }
}

function primeNumber() {
    for (let i = 2; i < 100000; i++) {
        let isPrime = true;
        for (let diviser = 2; diviser < i; diviser++) {
            if (i % diviser === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            document.querySelector("#resultPrime").innerHTML += `${i}, `
        }
    }
}

function showPI() {
    let i = 1n;
    let x = 3n * (10n ** 103n);
    let pi = x;
    while (x > 0) {
        x = x * i / ((i + 1n) * 4n);
        pi += x / (i + 2n);
        i += 2n;
    }
    let result = pi.toString().replace(/(\d{1})/, "$1,");
    document.querySelector("#resultPI").innerHTML = `${result}`;
}

function pullCards() {
    const deck = ['2 de Espadas', '2 de Paus', '2 de Copas', '2 de Ouro', 
    '3 de Espadas', '3 de Paus', '3 de Copas', '3 de Ouro',
    '4 de Espadas', '4 de Paus', '4 de Copas', '4 de Ouro',
    '5 de Espadas', '5 de Paus', '5 de Copas', '5 de Ouro',
    '6 de Espadas', '6 de Paus', '6 de Copas', '6 de Ouro',
    '7 de Espadas', '7 de Paus', '7 de Copas', '7 de Ouro',
    '8 de Espadas', '8 de Paus', '8 de Copas', '8 de Ouro',
    '9 de Espadas', '9 de Paus', '9 de Copas', '9 de Ouro',
    '10 de Espadas', '10 de Paus', '10 de Copas', '10 de Ouro',
    'J de Espadas', 'J de Paus', 'J de Copas', 'J de Ouro',
    'Q de Espadas', 'Q de Paus', 'Q de Copas', 'Q de Ouro',
    'K de Espadas', 'K de Paus', 'K de Copas', 'K de Ouro',
    'A de Espadas', 'A de Paus', 'A de Copas', 'A de Ouro'];
    const hand = [];

    let c1 = Math.floor(Math.random() * 52);
    document.querySelector("#card1").innerHTML = deck[c1];
    hand.push(deck[c1])
    deck.splice(c1, 1);

    let c2 = Math.floor(Math.random() * 51);
    document.querySelector("#card2").innerHTML = deck[c2];
    hand.push(deck[c2])
    deck.splice(c2, 1);

    let c3 = Math.floor(Math.random() * 50);
    document.querySelector("#card3").innerHTML = deck[c3];
    hand.push(deck[c3])
    deck.splice(c3, 1);

    let c4 = Math.floor(Math.random() * 49);
    document.querySelector("#card4").innerHTML = deck[c4];
    hand.push(deck[c4])
    deck.splice(c4, 1);

    let c5 = Math.floor(Math.random() * 48);
    document.querySelector("#card5").innerHTML = deck[c5];
    hand.push(deck[c5])
    deck.splice(c5, 1);

    const card2 = hand.filter((i) => {
        if(i.includes('2')) {
            return i;
        }
    })
    const card3 = hand.filter((i) => {
        if(i.includes('3')) {
            return i;
        }
    })
    const card4 = hand.filter((i) => {
        if(i.includes('4')) {
            return i;
        }
    })
    const card5 = hand.filter((i) => {
        if(i.includes('5')) {
            return i;
        }
    })
    const card6 = hand.filter((i) => {
        if(i.includes('6')) {
            return i;
        }
    })
    const card7 = hand.filter((i) => {
        if(i.includes('7')) {
            return i;
        }
    })
    const card8 = hand.filter((i) => {
        if(i.includes('8')) {
            return i;
        }
    })
    const card9 = hand.filter((i) => {
        if(i.includes('9')) {
            return i;
        }
    })
    const card10 = hand.filter((i) => {
        if(i.includes('10')) {
            return i;
        }
    })
    const cardJ = hand.filter((i) => {
        if(i.includes('J')) {
            return i;
        }
    })
    const cardQ = hand.filter((i) => {
        if(i.includes('Q')) {
            return i;
        }
    })
    const cardK = hand.filter((i) => {
        if(i.includes('K')) {
            return i;
        }
    })
    const cardA = hand.filter((i) => {
        if(i.includes('A')) {
            return i;
        }
    })
}