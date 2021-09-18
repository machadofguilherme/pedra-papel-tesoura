// Variáveis globais.
let pontosPC      = 0;
let pontosJogador = 0;
let jogadaPC;
let maoUsuario;

// Referências.
let mensagemInfo   = document.querySelector('.round-message');
let mensagemRodada = document.querySelector('.msg-important');
let btnPedra       = document.querySelector('#rock-btn');
let btnTesoura     = document.querySelector('#scissor-btn');
let btnPapel       = document.querySelector('#paper-btn');
let placarUsuario  = document.querySelector('#score-user');
let placarPC       = document.querySelector('#score-pc');
let year           = document.querySelector('#year');

// 'Mão' do usuário.
btnPedra.addEventListener('click', function() {
    maoUsuario = 'Pedra';
    jogadorPC()
});

btnPapel.addEventListener('click', function() {
    maoUsuario = 'Papel';
    jogadorPC()
});

btnTesoura.addEventListener('click', function() {
    maoUsuario = 'Tesoura';
    jogadorPC()
});

// 'Mão' do computador.
function jogadorPC() {
    let escolhePedra      = 'pedra'        
    let escolhePapel      = 'papel';
    let escolheTesoura    = 'tesoura';
    let escolhaItems      = [escolhePedra, escolhePapel, escolheTesoura];
    
    // Randomizando o valor de cada índice do array.
    if (escolhaItems[Math.floor(Math.random() * escolhaItems.length)] == escolhePedra) {
        jogadaPC = 'Pedra';
        return jogoExecutado();
    } else if (escolhaItems[Math.floor(Math.random() * escolhaItems.length)] == escolhePapel) {
        jogadaPC = 'Papel';
        return jogoExecutado();
    } else {
        jogadaPC = 'Tesoura';
        return jogoExecutado();
    }
}

// Execução do jogo.
function jogoExecutado() {
    mensagemInfo.innerHTML = 'A partida irá começar!';
    if (jogadaPC == maoUsuario) {
        mensagemInfo.innerHTML = 'Um empate!';
    } else if (jogadaPC == 'Pedra' && maoUsuario == 'Papel') {
        mensagemInfo.innerHTML = `${maoUsuario} engole ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } else if (jogadaPC == 'Papel' && maoUsuario == 'Pedra') {
        mensagemInfo.innerHTML = `${jogadaPC} engole ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Pedra' && maoUsuario == 'Tesoura') {
        mensagemInfo.innerHTML = `${jogadaPC} quebra ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Tesoura' && maoUsuario == 'Pedra') {
        mensagemInfo.innerHTML = `${maoUsuario} quebra ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } else if (jogadaPC == 'Papel' && maoUsuario == 'Pedra') {
        mensagemInfo.innerHTML = `${jogadaPC} engole ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Pedra' && maoUsuario == 'Papel') {
        mensagemInfo.innerHTML = `${maoUsuario} engole ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } else if (jogadaPC == 'Papel' && maoUsuario == 'Tesoura') {
        mensagemInfo.innerHTML = `${maoUsuario} corta ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } else if (jogadaPC == 'Tesoura' && maoUsuario == 'Papel') {
        mensagemInfo.innerHTML = `${jogadaPC} corta ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Tesoura' && maoUsuario == 'Pedra') {
        mensagemInfo.innerHTML = `${maoUsuario} quebra ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } else if (jogadaPC == 'Pedra' && maoUsuario == 'Tesoura') {
        mensagemInfo.innerHTML = `${jogadaPC} quebra ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Tesoura' && maoUsuario == 'Papel') {
        mensagemInfo.innerHTML = `${jogadaPC} corta ${maoUsuario}!`
        placarPC.innerHTML = pontosPC += 1;
    } else if (jogadaPC == 'Papel' && maoUsuario == 'Tesoura') {
        mensagemInfo.innerHTML = `${maoUsuario} corta ${jogadaPC}!`
        placarUsuario.innerHTML = pontosJogador += 1;
    } 
}

// Mudança de ano.
let ano = new Date();
year.innerHTML = ano.getFullYear();