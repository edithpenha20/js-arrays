const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){

    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? FiltrarPorDisponibilidade() : FiltrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);

    if (categoria == 'disponivel') {

        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function FiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){

    valorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}