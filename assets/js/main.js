// Variáveis globais.
let pontosPC      = 0;
let pontosJogador = 0;
let jogadaPC;
let maoUsuario;

for(let i = 1; i <= 5; i++) {
    // Convite inicial ao usuário.
    let jogadaUsuario = prompt('Escolha uma opção entre: pedra, papel e tesoura. \
                            Adicione essa opção no campo abaixo.');

    // Teste de entrada do usuário.                            
    if  (jogadaUsuario == null) {
        alert('Insira um valor válido na caixa de texto!');
        break;
    } else if (jogadaUsuario === 'pedra' || jogadaUsuario === 'papel' || jogadaUsuario === 'tesoura' ||
               jogadaUsuario === 'Pedra' || jogadaUsuario === 'Papel' || jogadaUsuario === 'Tesoura' ||
               jogadaUsuario === 'PEDRA' || jogadaUsuario === 'PAPEL' || jogadaUsuario === 'TESOURA') {
               jogadaUsuario = jogadaUsuario;
               jogadorPC();
    } else {
        alert('[ERRO] Tente novamente.');
        break;
    }

    // 'Mão' do computador.
    function jogadorPC() {
        // Variáveis locais.
        let escolhePedra      = 'pedra';
        let escolhePapel      = 'papel';
        let escolheTesoura    = 'tesoura';
        let escolhaItems      = [escolhePedra, escolhePapel, escolheTesoura];
    
        // Randomizando o valor de cada índice do array.
        if (escolhaItems[Math.floor(Math.random() * escolhaItems.length)] == escolhePedra) {
            jogadaPC = 'pedra';
            return jogoExecutado();
        } else if (escolhaItems[Math.floor(Math.random() * escolhaItems.length)] == escolhePapel) {
            jogadaPC = 'papel';
            return jogoExecutado();
        } else {
            jogadaPC = 'tesoura';
            return jogoExecutado();
        }
    }

    // Função do jogo.
    function jogoExecutado() {
        alert('Você e o computador já escolheram o modo de ataque. Prepare-se!');
        if (jogadaPC == jogadaUsuario) {
            alert(`Você escolheu ${jogadaUsuario} e o computador escolheu ${jogadaPC}. Um empate!`)
            return jogadaUsuario;
        } else if (jogadaPC == 'pedra' && jogadaUsuario == 'papel') {
            alert(`Você venceu! ${jogadaUsuario} engole ${jogadaPC}!`)
            pontosJogador += 1;
        } else if (jogadaPC == 'papel' && jogadaUsuario == 'pedra') {
            alert(`Você perdeu! ${jogadaPC} engole ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'pedra' && jogadaUsuario == 'tesoura') {
            alert(`Você perdeu! ${jogadaPC} quebra ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'tesoura' && jogadaUsuario == 'pedra') {
            alert(`Você venceu! ${jogadaUsuario} quebra ${jogadaPC}!`)
            pontosJogador += 1;
        } else if (jogadaPC == 'papel' && jogadaUsuario == 'pedra') {
            alert(`Você perdeu! ${jogadaPC} engole ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'pedra' && jogadaUsuario == 'papel') {
            alert(`Você venceu! ${jogadaUsuario} engole ${jogadaPC}!`)
            pontosJogador += 1;
        } else if (jogadaPC == 'papel' && jogadaUsuario == 'tesoura') {
            alert(`Você venceu! ${jogadaUsuario} corta ${jogadaPC}!`)
            pontosJogador += 1;
        } else if (jogadaPC == 'tesoura' && jogadaUsuario == 'papel') {
            alert(`Você perdeu! ${jogadaPC} corta ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'tesoura' && jogadaUsuario == 'pedra') {
            alert(`Você venceu! ${jogadaUsuario} quebra ${jogadaPC}!`)
            pontosJogador += 1;
        } else if (jogadaPC == 'pedra' && jogadaUsuario == 'tesoura') {
            alert(`Você perdeu! ${jogadaPC} quebra ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'tesoura' && jogadaUsuario == 'papel') {
            alert(`Você perdeu! ${jogadaPC} corta ${jogadaUsuario}!`)
            pontosPC += 1;
        } else if (jogadaPC == 'papel' && jogadaUsuario == 'tesoura') {
            alert(`Você venceu! ${jogadaUsuario} corta ${jogadaPC}!`)
            pontosJogador += 1;
        }
    }
}

if (pontosJogador >= 1 && pontosPC >= 1) {
    alert('Houve empate.')
} else if (pontosJogador == pontosPC) {
    throw new Error();
} else if (pontosJogador < pontosPC) {
    alert('O computador venceu!')
} else if (pontosJogador > pontosPC) {
    alert('Você é o grande campeão!')
}