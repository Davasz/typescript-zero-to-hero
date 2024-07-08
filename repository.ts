interface Repositorio<T> {
    getById(id: string): T | undefined;
    getAll(): T[];
    add(item: T): void;
    update(id: string, item: T): void;
    delete(id: string): void;
}

class RepositorioMemoria<T> implements Repositorio<T> {
    private itens: Map<string, T> = new Map();

    getById(id: string): T | undefined {
        return this.itens.get(id);
    }

    getAll(): T[] {
        return Array.from(this.itens.values());
    }

    add(item: T): void {
        const id = (Math.random() * 1000).toString();
        this.itens.set(id, item);
    }

    update(id: string, item: T): void {
        if (this.itens.has(id)) {
            this.itens.set(id, item);
        }
    }

    delete(id: string): void {
        this.itens.delete(id);
    }
}

interface Usuario {
    id: string;
    nome: string;
    email: string;
}

const repoUsuario = new RepositorioMemoria<Usuario>();
const novoUsuario: Usuario = { id: "1", nome: "John Doe", email: "john.doe@example.com" };
repoUsuario.add(novoUsuario);
console.log(repoUsuario.getAll());
