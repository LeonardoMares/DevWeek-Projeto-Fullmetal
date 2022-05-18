/*
 Objetivo 1 - quando pasar o mouse em cima do personagem:

  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animaçao nele

  - retirar a classe selecionado do personaagem que esta selecionado


  Objetivo 2 - quando passar o mouse em cima do pesonagem,trocar a imagem e nome do personagem grande
  
  - alterar a imagem do jogador 1
  - alterar o nome do jogador 1
*/

//const alphonse = document.getElementById('alphonse')

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'king-bradley') return;

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador1.innerHTML = nomeSelecionado;

  });
});

