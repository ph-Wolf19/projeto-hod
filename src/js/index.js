/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem anteriormente selecionada
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    - passo 7 - esconder a informação do dragão anteriormente selecionado
    - passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")
// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
// - passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    // - passo 4 - marcar o botão clicado como se estivesse selecionado
    marcarBotaoSelecionado(botao);

    // - passo 5 - esconder a imagem anteriormente selecionada
    esconderImagenAtiva();

    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagenDeFundo(indice);

    // - passo 7 - esconder a informação do dragão anteriormente selecionado
    escondendoAsInformacoesAtivas();

    // - passo 8 - mostrar a informação do dragão referente ao botão clicado
    mostrarInformacoes(indice); 
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function escondendoAsInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagenDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagenAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove("selecionado");
}
