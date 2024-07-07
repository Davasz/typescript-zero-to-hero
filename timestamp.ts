function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        timestamp: Date;

        constructor(...args: any[]) {
            super(...args);
            this.timestamp = new Date();
        }

        getTimestamp(): Date {
            return this.timestamp;
        }
    };
}

class Usuario {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

const TimestampedUsuario = Timestamped(Usuario);

const usuario = new TimestampedUsuario("Maria");
console.log(usuario.nome); 
console.log(usuario.getTimestamp()); 
