let numero = []

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    for (let i = 0; i < quantidade; i++) {
        numero.push(gerandoNumero(de, ate));
    }
    alert(numero);
}

function gerandoNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

