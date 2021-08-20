/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`♦️ ♥️ ♣️ ♠️ Boas vindas ao jogo de Blackjack! ♦️ ♥️ ♣️ ♠️`);

if(confirm("Deseja começar a jogar?")) {
   //Jogador
   const carta1Jogador = comprarCarta(); 
   const carta2Jogador = comprarCarta();
   const pontosJogador = carta1Jogador.valor + carta2Jogador.valor;
   console.log(`Usuário - cartas ${carta1Jogador.texto} e ${carta2Jogador.texto} - pontuação ${pontosJogador}`);
   //Maquina
   const carta1Maquina = comprarCarta(); 
   const carta2Maquina = comprarCarta();
   const pontosMaquina = carta1Maquina.valor + carta2Maquina.valor;
   console.log(`Máquina - cartas ${carta1Maquina.texto} e ${carta2Maquina.texto} - pontuação ${pontosMaquina}`);
 
   //Conferindo pontuação
   if(pontosJogador > pontosMaquina) {
      console.log(`Parabains! Você venceu!`);
   } else if (pontosJogador < pontosMaquina) {
      console.log(`Que pena! Você perdeu!`);
   } else {
      console.log(`Uau! Empate!`);
   }
} else {
   console.log("O jogo acabou!");
}