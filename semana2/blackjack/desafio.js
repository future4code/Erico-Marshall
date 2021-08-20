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
   let cartasJogador =[]
   cartasJogador.push(comprarCarta())
   cartasJogador.push(comprarCarta())

   //Máquina
   let cartasMaquina = []
   cartasMaquina.push(comprarCarta())
   cartasMaquina.push(comprarCarta())


   //Extrai valor das cartas
   let cartasValor = (array) => {
      let valorSoma = 0
      let i = 0
      while (array.length > i) {
         valorSoma += array[i].valor
         i++
      } return valorSoma
   }


   //Extrai texto das cartas
   let extraiTextoCartas = (array) => {
      let i = 0
      let arrayTexto = []
      while (array.length > i) {
         arrayTexto.push(array[i].texto)
         i++
      }
      return arrayTexto
   }

      
   //Compara os A's 
   while (cartasJogador[0].texto.includes("A") && cartasJogador[1].texto.includes("A")) {
      cartasJogador[1] = comprarCarta()
   }

   while (cartasMaquina[0].texto.includes("A") && cartasMaquina[1].texto.includes("A")) {
      cartasMaquina[1] = comprarCarta()
   }


   //Adicionando cartas do Jogador
   let pontos = 0
   while (confirm(`
   Suas cartas são ${extraiTextoCartas(cartasJogador)}. 
   Você está com ${cartasValor(cartasJogador)} pontos!
   A carta revelada pelo computador é: ${cartasMaquina[0].texto}.
   Deseja comprar mais uma carta?
   `) && cartasValor(cartasJogador) < 21 ) {
      cartasJogador.push(comprarCarta())
      pontos++
   }


   //Adicionando cartas da máquina
   while (cartasValor(cartasJogador) > cartasValor(cartasMaquina) && cartasValor(cartasJogador) <= 21) {
      cartasMaquina.push(comprarCarta())
   }

   const alertaJogada = (`
   Suas cartas são ${extraiTextoCartas(cartasJogador)}! 
   Você ficou com ${cartasValor(cartasJogador)} pontos!
   As cartas do computador são ${extraiTextoCartas(cartasMaquina)}!
   A pontuação do computador é ${cartasValor(cartasMaquina)}!
   `)


   //Conferindo pontuação
   if (cartasValor(cartasJogador) <= 21 && cartasValor(cartasJogador) > cartasValor(cartasMaquina)) {
      alert(`${alertaJogada} Parabains! Você venceu!`);
   } else if (cartasValor(cartasJogador) < cartasValor(cartasMaquina) && cartasValor(cartasMaquina) <= 21) {
      alert(`${alertaJogada} Que pena! Você perdeu!`);
   } else if (cartasValor(cartasJogador) <=21 && cartasValor(cartasMaquina) > 21) {
      alert(`${alertaJogada} Parabains! Você venceu!`);
   } else if (cartasValor(cartasJogador) && cartasValor(cartasMaquina) > 21) {
      alert(`${alertaJogada} Uau! Ambos perderam!`);
   } else if (cartasValor(cartasJogador) > 21 && cartasValor(cartasMaquina) < 21) {
      alert(`${alertaJogada} Que pena! Você perdeu!`);
   } else {
      alert(`${alertaJogada} Uau! Deu empate!`);
   }

} else {
   console.log("O jogo acabou!");
}
