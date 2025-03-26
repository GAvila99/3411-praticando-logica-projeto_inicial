/**
 * Função para alterar o status de aluguel de um jogo.
 * Permite alternar entre "Alugar" e "Devolver" para um jogo específico.
*/
function alterarStatus(id) {
    // Obtém o elemento do jogo clicado com base no ID fornecido
    let gameClicado = document.getElementById(`game-${id}`);
    
    // Obtém a imagem do jogo dentro do elemento clicado
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    
    // Obtém o botão de ação (Alugar/Devolver) dentro do elemento clicado
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    // Obtém o nome do jogo dentro do elemento clicado
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // Verifica se o jogo já está marcado como alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Exibe uma confirmação para devolver o jogo
        confirm(`Deseja devolver o jogo ${nomeJogo.textContent}?`);
        
        // Remove a classe que indica que o jogo está alugado
        imagem.classList.remove('dashboard__item__img--rented');
        
        // Remove a classe do botão que indica a ação de devolução
        botao.classList.remove('dashboard__item__button--return');
        
        // Altera o texto do botão para "Alugar"
        botao.textContent = 'Alugar';
    } else {
        // Adiciona a classe que indica que o jogo está alugado
        imagem.classList.add('dashboard__item__img--rented');
        
        // Adiciona a classe do botão que indica a ação de devolução
        botao.classList.add('dashboard__item__button--return');
        
        // Altera o texto do botão para "Devolver"
        botao.textContent = 'Devolver';
    }
}

