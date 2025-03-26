// Declaração de um array global para armazenar os nomes dos amigos
let amigos = [];

/**
 * Função para adicionar um amigo à lista.
 * Verifica se o campo de entrada está vazio ou se o amigo já foi adicionado.
 * Atualiza a lista de amigos exibida na interface.
 */
function adicionar() {
    // Obtém o elemento de entrada do nome do amigo
    let amigo = document.getElementById("nome-amigo");

    // Verifica se o campo de entrada está vazio
    if (amigo.value == "") {
        alert("Digite o nome do amigo!");
        return;
    } 
    // Verifica se o amigo já foi adicionado à lista
    else if (amigos.includes(amigo.value)) {
        alert("Amigo já adicionado!");
        return;
    } 
    // Caso o nome seja válido e ainda não esteja na lista
    else {
        // Obtém o elemento da lista de amigos exibida na interface
        let lista = document.getElementById("lista-amigos");

        // Adiciona o nome do amigo ao array global
        amigos.push(amigo.value);

        // Atualiza a exibição da lista de amigos
        if (lista.textContent == "") {
            lista.textContent = amigo.value;
        } else {
            lista.textContent += " - " + amigo.value;
        }

        // Limpa o campo de entrada
        amigo.value = "";
    }
}

/**
 * Função para realizar o sorteio dos amigos.
 * Embaralha a lista de amigos e exibe o resultado do sorteio na interface.
 */
function sortear() {
    // Embaralha a lista de amigos
    embaralha(amigos);

    // Obtém o elemento onde o resultado do sorteio será exibido
    let sorteio = document.getElementById('lista-sorteio');

    // Itera sobre a lista de amigos para criar os pares do sorteio
    for (let i = 0; i < amigos.length; i++) {
        // Se for o último amigo, ele será pareado com o primeiro
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>';
        } 
        // Caso contrário, pareia o amigo atual com o próximo
        else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>';
        }
    }
}

/**
 * Função para embaralhar a lista de amigos.
 * Utiliza o algoritmo de Fisher-Yates para embaralhar os elementos do array.
 * @param {Array} lista - A lista de amigos a ser embaralhada.
 */
function embaralha(lista) {
    // Itera sobre a lista de trás para frente
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Troca os elementos do índice atual com o índice aleatório
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

/**
 * Função para reiniciar o sorteio.
 * Limpa a lista de amigos e o resultado do sorteio exibido na interface.
 */
function reiniciar() {
    // Limpa o array global de amigos
    amigos = [];

    // Limpa a exibição da lista de amigos
    document.getElementById("lista-amigos").innerHTML = "";

    // Limpa a exibição do resultado do sorteio
    document.getElementById('lista-sorteio').innerHTML = "";
}