


function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }

}

function comprarPista(qtd) {
    if (qtd >= 1 && qtd <= document.getElementById('qtd-pista').textContent) {
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        if (qtd > qtdPista) {
            alert('Quantidade indisponível para tipo pista');
        } else {
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Quantidade inválida');
    }
}

function comprarSuperior(qtd) {
    if (qtd >= 1 && qtd <= document.getElementById('qtd-superior').textContent) {
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if (qtd > qtdSuperior) {
            alert('Quantidade indisponível para tipo cadeira superior');
        } else {
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Quantidade inválida');
    }
}

function comprarInferior(qtd) {
    if(qtd >= 1 && qtd <= document.getElementById('qtd-inferior').textContent) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo cadeira inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
    } else {
        alert('Quantidade inválida');
    }
}