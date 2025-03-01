let numero = []

function sortear() { //funcao para sortear numero
    let quantidade = parseInt(document.getElementById('quantidade').value); //quantidade de numeros para gerar
    let de = parseInt(document.getElementById('de').value); //numero inicial
    let ate = parseInt(document.getElementById('ate').value); //numero final

    for (let i = 0; i < quantidade; i++) {
        numero.push(gerandoNumero(de, ate));
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numero}</label>`
}

function gerandoNumero(min, max) { //funçao para gerar numero aleatorio inteiro
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


