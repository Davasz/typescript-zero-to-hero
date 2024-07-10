const mapaUsuarios = new Map<string, string>();
mapaUsuarios.set("1", "Alice");
mapaUsuarios.set("2", "Bob");

console.log(mapaUsuarios.get("1"));

const conjuntoNumeros = new Set<number>();
conjuntoNumeros.add(1);
conjuntoNumeros.add(2);
conjuntoNumeros.add(2); 

console.log(conjuntoNumeros.size); 