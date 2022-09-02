let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const resp = await fetch (endpointDaAPI);
    livros = await resp.json();
    
    let livrosComDesconto = aplicarDesconto(livros);

    exibirLivrosNaTela(livrosComDesconto);
}


