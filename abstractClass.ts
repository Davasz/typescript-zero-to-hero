abstract class Figura {
    abstract area(): number;
    abstract perimetro(): number;

    descricao(): string {
        return `Área: ${this.area()} Perímetro: ${this.perimetro()}`;
    }
}

class Circulo extends Figura {
    raio: number;

    constructor(raio: number) {
        super();
        this.raio = raio;
    }

    area(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    perimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

class Retangulo extends Figura {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area(): number {
        return this.largura * this.altura;
    }

    perimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

// Criando instâncias de Circulo e Retangulo
const meuCirculo = new Circulo(5);
console.log(meuCirculo.descricao()); // Output: Área: 78.53981633974483 Perímetro: 31.41592653589793

const meuRetangulo = new Retangulo(4, 6);
console.log(meuRetangulo.descricao()); // Output: Área: 24 Perímetro: 20
