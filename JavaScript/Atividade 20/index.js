function avatar() {
    let x = 0;
    let y = 0;
    let gold = 0;

    function getPosition() {
        return `Position X: ${x}  Position Y: ${y} Bolso de moedas: ${gold}`;
    }

    function moveFoward() {
        y++;
        return `Y: ${y}`;
    }

    function moveBackward() {
        if (y <= 0) {
            return `Você chegou no limite do eixo Y!`;
        }
        y--;
        return `Y: ${y}`;
    }

    function moveToRight() {
        x++;
        return `X: ${x}`;
    }

    function moveToLeft() {
        if (x <= 0) {
            return `Você chegou no limite do eixo X!`;
        }
        x--;
        return `X: ${x}`;
    }

    function pickCoin() {
        gold++;
        return `Agora você tem ${gold} moeda(s)!`;
    }

    return {
        getPosition,
        moveFoward,
        moveBackward,
        moveToRight,
        moveToLeft,
        pickCoin,
    };
}

const avatar1 = avatar();

/////////////// Classe /////////////////////////////////

class Avatar {
    constructor(x, y, gold) {
        this._x = x;
        this._y = y;
        this._gold = gold;
    }

    get position() {
        return `Position X: ${this._x}  Position Y: ${this._y} Bolso de moedas: ${this._gold}`;
    }

    moveFoward() {
        this._y++;
        return `Y: ${this._y}`;
    }

    moveBackward() {
        if (this._y <= 0) {
            return `Você chegou no limite do eixo Y!`;
        }
        this._y--;
        return `Y: ${this._y}`;
    }

    moveLeft() {
        if (this._x <= 0) {
            return `Você chegou no limite do eixo X!`;
        }
        this._x--;
        return `X: ${this._x}`;
    }

    moveRight() {
        this._x++;
        return `X: ${this._x}`;
    }

    pickCoin() {
        this._gold++;
        return `Agora você tem ${this._gold} moeda(s) na sua bolsa!`;
    }
}

const avatar2 = new Avatar(0, 0, 0);
