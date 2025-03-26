// Função principal para realizar a compra de ingressos
function comprar() {
    // Obtém o tipo de ingresso selecionado pelo usuário
    let tipo = document.getElementById("tipo-ingresso");
    // Obtém a quantidade de ingressos informada pelo usuário e converte para número inteiro
    let qtd = parseInt(document.getElementById("qtd").value);

    // Verifica o tipo de ingresso selecionado e chama a função correspondente
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipo.value == 'inferior') {
        comprarInferior(qtd);
    }
}

// Função para realizar a compra de ingressos do tipo "pista"
function comprarPista(qtd) {
    // Verifica se a quantidade é válida e está dentro do limite disponível
    if (qtd >= 1 && qtd <= document.getElementById('qtd-pista').textContent) {
        // Obtém a quantidade disponível de ingressos do tipo "pista" e converte para número inteiro
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        // Verifica se a quantidade solicitada é maior do que a disponível
        if (qtd > qtdPista) {
            alert('Quantidade indisponível para tipo pista');
        } else {
            // Atualiza a quantidade disponível subtraindo a quantidade comprada
            qtdPista = qtdPista - qtd;
            document.getElementById('qtd-pista').textContent = qtdPista;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Quantidade inválida');
    }
}

// Função para realizar a compra de ingressos do tipo "superior"
function comprarSuperior(qtd) {
    // Verifica se a quantidade é válida e está dentro do limite disponível
    if (qtd >= 1 && qtd <= document.getElementById('qtd-superior').textContent) {
        // Obtém a quantidade disponível de ingressos do tipo "superior" e converte para número inteiro
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        // Verifica se a quantidade solicitada é maior do que a disponível
        if (qtd > qtdSuperior) {
            alert('Quantidade indisponível para tipo cadeira superior');
        } else {
            // Atualiza a quantidade disponível subtraindo a quantidade comprada
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior').textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Quantidade inválida');
    }
}

// Função para realizar a compra de ingressos do tipo "inferior"
function comprarInferior(qtd) {
    // Verifica se a quantidade é válida e está dentro do limite disponível
    if (qtd >= 1 && qtd <= document.getElementById('qtd-inferior').textContent) {
        // Obtém a quantidade disponível de ingressos do tipo "inferior" e converte para número inteiro
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        // Verifica se a quantidade solicitada é maior do que a disponível
        if (qtd > qtdInferior) {
            alert('Quantidade indisponível para tipo cadeira inferior');
        } else {
            // Atualiza a quantidade disponível subtraindo a quantidade comprada
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior').textContent = qtdInferior;
            alert('Compra realizada com sucesso!');
        }
    } else {
        alert('Quantidade inválida');
    }
}