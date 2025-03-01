function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let numeroMinimo = document.getElementById('de').value;
    let numeroMaximo = document.getElementById('ate').value;
    alert(quantidade);
    alert(numeroMinimo);
    alert(numeroMaximo);
}

function gerarNumAleatorio(de, ate) {
    return Math.random() * (ate - de) + de;
}

let numAleatorio = gerarNumAleatorio(numeroMinimo, numeroMaximo);
console.log(numAleatorio);