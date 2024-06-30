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

class Pessoa {
    nome: string;
    idade: number;

    // Construtor da classe
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método da classe
    saudacao(): string {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`;
    }
}

// Criando uma instância da classe Pessoa
const pessoa1 = new Pessoa("Davi", 18);
console.log(pessoa1.saudacao());
