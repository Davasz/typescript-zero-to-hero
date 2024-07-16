function simularApi(delay: number) {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("Resposta da API");
        }, delay);
    });
}

async function chamadaApi() {
    console.log("Fazendo chamada à API...");
    const resposta = await simularApi(2000);
    console.log("Resposta recebida:", resposta);
}

chamadaApi();