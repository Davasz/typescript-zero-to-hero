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

abstract class Pagamento {
    protected valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    abstract realizarPagamento(): void;

    emitirRecibo(): void {
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado.`);
    }
}

class CartaoCredito extends Pagamento {
    private numeroCartao: string;

    constructor(valor: number, numeroCartao: string) {
        super(valor);
        this.numeroCartao = numeroCartao;
    }

    realizarPagamento(): void {
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado com cartão de crédito ${this.numeroCartao}.`);
    }
}

class PayPal extends Pagamento {
    private email: string;

    constructor(valor: number, email: string) {
        super(valor);
        this.email = email;
    }

    realizarPagamento(): void {
        console.log(`Pagamento de R$${this.valor.toFixed(2)} realizado com PayPal ${this.email}.`);
    }
}

// Uso das classes
const pagamento1 = new CartaoCredito(100, "1234-5678-9012-3456");
pagamento1.realizarPagamento();
pagamento1.emitirRecibo();

const pagamento2 = new PayPal(200, "exemplo@paypal.com");
pagamento2.realizarPagamento();
pagamento2.emitirRecibo();

