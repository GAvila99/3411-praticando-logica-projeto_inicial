function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector("dashboard__item__image");
    let botao = gameClicado.querySelector("dashboard__item__button");
    let nomeJogo = gameClicado.querySelector("dashboard__item__name");

    if (imagem.classList.contains("dashboard__item__img")) {
        imagem.classList.remove("dashboard__item__img");
        imagem.classList.add("dashboard__item__img dashboard__item__img--rented");
    } else {
        imagem.classList.remove("dashboard__item__image--return");
        imagem.classList.add("dashboard__item__image");
    }


    if (botao.classList.contains("dashboard__item__button--rent")) {
        botao.classList.remove("dashboard__item__button--rent");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    } else {
        botao.classList.remove("dashboard__item__button--return");
        botao.classList.add("dashboard__item__button--rent");
        botao.innerHTML = "Alugar";
    }
}