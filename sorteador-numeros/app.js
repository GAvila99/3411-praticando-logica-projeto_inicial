let numero
let sorteados = []

function sortear() { //funcao para sortear numero
    let quantidade = parseInt(document.getElementById('quantidade').value); //quantidade de numeros para gerar
    let de = parseInt(document.getElementById('de').value); //numero inicial
    let ate = parseInt(document.getElementById('ate').value); //numero final

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números a serem sorteados não pode ser maior que o intervalo de números possíveis');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = gerandoNumero(de, ate);

        while (sorteados.includes(numero)) {
            numero = gerandoNumero(de, ate);
        } //verifica se o numero ja esta incluso

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');//pega o elemnto mas nao retorna(nao possui .value))
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    ativarBotao();
}

function gerandoNumero(min, max) { //funçao para gerar numero aleatorio inteiro
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ativarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    ativarBotao();
}
