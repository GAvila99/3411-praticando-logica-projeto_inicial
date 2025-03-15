let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'Total: R$0,00';

function adicionar() {
    if (document.getElementById('quantidade').value <= 0) {
        alert('Quantidade inválida!');
        return;
    } else {
        let produto = document.getElementById('produto').value;
        let nomeProduto = produto.split('-')[0];
        let valorUnitario = produto.split('R$')[1];
        let quantidade = document.getElementById('quantidade').value;
        let preco = valorUnitario * quantidade;
        let listaCarrinho = document.getElementById('lista-produtos');
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
        totalGeral += preco;
        document.getElementById('valor-total').innerHTML = `Total: R$${totalGeral}`;
        document.getElementById('quantidade').value = '';
    }
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'Total: R$0,00';
}