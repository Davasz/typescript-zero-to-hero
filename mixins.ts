type Constructor<T = {}> = new (...args: any[]) => T;

function Salutation<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        saudacao() {
            console.log("Olá! Como você está?");
        }
    };
}

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

// Aplicando o mixin à classe Pessoa
const SaudacaoPessoa = Salutation(Pessoa);

const pessoa2 = new SaudacaoPessoa("Maria");
pessoa2.saudacao(); // Output: Olá! Como você está?
console.log(pessoa2.nome); // Output: Maria
