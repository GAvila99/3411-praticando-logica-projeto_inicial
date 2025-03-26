// Variável global para armazenar o valor total do carrinho
let totalGeral = 0;

// Inicializa o conteúdo da lista de produtos no carrinho como vazio
document.getElementById('lista-produtos').innerHTML = '';

// Inicializa o valor total exibido no carrinho como R$0,00
document.getElementById('valor-total').innerHTML = 'Total: R$0,00';

/**
 * Função para adicionar um produto ao carrinho.
 * Verifica se a quantidade é válida, calcula o preço total do produto e atualiza o carrinho.
 */
function adicionar() {
    // Verifica se a quantidade informada é menor ou igual a 0
    if (document.getElementById('quantidade').value <= 0) {
        alert('Quantidade inválida!'); // Exibe um alerta caso a quantidade seja inválida
        return; // Encerra a execução da função
    } else {
        // Obtém o valor do produto selecionado no campo de entrada
        let produto = document.getElementById('produto').value;

        // Extrai o nome do produto (antes do separador "-")
        let nomeProduto = produto.split('-')[0];

        // Extrai o valor unitário do produto (após "R$")
        let valorUnitario = produto.split('R$')[1];

        // Obtém a quantidade informada pelo usuário
        let quantidade = document.getElementById('quantidade').value;

        // Calcula o preço total do produto (valor unitário * quantidade)
        let preco = valorUnitario * quantidade;

        // Obtém o elemento da lista de produtos no carrinho
        let listaCarrinho = document.getElementById('lista-produtos');

        // Adiciona o produto à lista exibida no carrinho
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

        // Atualiza o valor total do carrinho
        totalGeral += preco;

        // Atualiza o valor total exibido no carrinho
        document.getElementById('valor-total').innerHTML = `Total: R$${totalGeral}`;

        // Limpa o campo de entrada de quantidade
        document.getElementById('quantidade').value = '';
    }
}

/**
 * Função para limpar o carrinho.
 * Reseta o valor total e remove todos os produtos exibidos no carrinho.
 */
function limpar() {
    // Reseta o valor total do carrinho para 0
    totalGeral = 0;

    // Limpa a lista de produtos exibida no carrinho
    document.getElementById('lista-produtos').innerHTML = '';

    // Atualiza o valor total exibido no carrinho para R$0,00
    document.getElementById('valor-total').innerHTML = 'Total: R$0,00';
}