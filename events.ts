class EventEmitter {
    private eventos: { [key: string]: Function[] } = {};

    on(evento: string, listener: Function): void {
        if (!this.eventos[evento]) {
            this.eventos[evento] = [];
        }
        this.eventos[evento].push(listener);
    }

    off(evento: string, listener: Function): void {
        if (!this.eventos[evento]) return;
        this.eventos[evento] = this.eventos[evento].filter(l => l !== listener);
    }

    emit(evento: string, ...args: any[]): void {
        if (!this.eventos[evento]) return;
        this.eventos[evento].forEach(listener => listener(...args));
    }
}

const emitter = new EventEmitter();

function respostaEvento(data: any) {
    console.log(`Evento recebido com dados: ${data}`);
}

emitter.on("eventoTeste", respostaEvento);
emitter.emit("eventoTeste", "dados 1");

emitter.off("eventoTeste", respostaEvento);
emitter.emit("eventoTeste", "dados 2");
