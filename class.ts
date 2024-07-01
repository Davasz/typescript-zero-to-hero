class car {

    constructor(make: string, color: string, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }

    _make: string;
    _color: string;
    _doors: number;

    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }
}

// Classe base
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    mover(distanciaEmMetros: number): void {
        console.log(`${this.nome} moveu-se ${distanciaEmMetros} metros.`);
    }
}

// Classe derivada
class Cachorro extends Animal {
    latir(): void {
        console.log(`${this.nome} está latindo.`);
    }
}

const meuCachorro = new Cachorro("Rex");
meuCachorro.latir();
meuCachorro.mover(10); 
