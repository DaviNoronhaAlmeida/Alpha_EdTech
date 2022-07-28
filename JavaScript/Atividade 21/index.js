class Avatar {
    constructor(x, y, gold) {
        this._x = x;
        this._y = y;
        this._gold = gold;
        this._hp = 10;
        this._atk = 1;
    }

    get position() {
        if (this._hp === 0) return `Você está morto!`;
        return `Position X: ${this._x}  Position Y: ${this._y} Bolso de moedas: ${this._gold}`;
    }

    get situation() {
        if (this._hp === 0) return `Você está morto!`;
        return `Você tem ${this._hp} de vida!`;
    }

    moveFoward() {
        if (this._hp === 0) return `Você está morto!`;
        this._y++;
        return `Y: ${this._y}`;
    }

    moveBackward() {
        if (this._hp === 0) return `Você está morto!`;
        if (this._y <= 0) {
            return `Você chegou no limite do eixo Y!`;
        }
        this._y--;
        return `Y: ${this._y}`;
    }

    moveLeft() {
        if (this._hp === 0) return `Você está morto!`;
        if (this._x <= 0) {
            return `Você chegou no limite do eixo X!`;
        }
        this._x--;
        return `X: ${this._x}`;
    }

    moveRight() {
        if (this._hp === 0) return `Você está morto!`;
        this._x++;
        return `X: ${this._x}`;
    }

    pickCoin() {
        if (this._hp === 0) return `Você está morto!`;
        this._gold++;
        return `Agora você tem ${this._gold} moeda(s) na sua bolsa!`;
    }

    attack() {
        if (this._hp === 0) return `Você está morto!`;
        return this._atk;
    }

    takeDamage(damage) {
        if (this._hp === 0) return `Você está morto!`;
        this._hp = this._hp - damage;
        return `Você tomou ${damage} de dano!`;
    }
}

const avatar1 = new Avatar(0, 0, 0);

class Cowboy extends Avatar {
    constructor(x, y, gold) {
        super(x, y, gold);
        this._ammo = 10;
        this._atk = 2;
    }

    get ammo() {
        if (this._hp === 0) return `Você está morto!`;
        return `Você tem ${this._ammo} de munição!`;
    }

    attack() {
        if (this._hp === 0) return `Você está morto!`;
        if (this._ammo === 0) return `Você não tem mais munição!`;
        this._ammo--;
        return this._atk;
    }

    pickAmmo() {
        if (this._hp === 0) return `Você está morto!`;
        this._ammo++;
        return `Você achou munição, agora você tem ${this._ammo} de munição`;
    }
}

const cowboy1 = new Cowboy(0, 0, 0);

class Mage extends Avatar {
    constructor(x, y, gold) {
        super(x, y, gold);
        this._mp = 10;
        this._atk = 3;
    }

    get mp() {
        if (this._hp === 0) return `Você está morto!`;
        return `Você tem ${this._mp} de mp!`;
    }

    attack() {
        if (this._hp === 0) return `Você está morto!`;
        if (this._mp === 0) {
            setTimeout(() => (this._mp = 10), 10000);
            return `Acabou seu mp! Espere 10 segundos para recarregar!`;
        }
        this._mp--;
        return this._atk;
    }
}

const mage1 = new Mage(0, 0, 0);
