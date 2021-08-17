// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo:"))
  const largura = Number(prompt("Digite a largura do retângulo:"))
  const areaRet = largura * altura

  console.log(areaRet)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"))
  const idade = anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Digite seu nome")
  const idade = Number(prompt("Digite sua idade"))
  const email = prompt("Digite seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  coresUsuario = []
  coresUsuario.push(prompt("Digite uma cor"))
  coresUsuario.push(prompt("Digite a segunda cor"))
  coresUsuario.push(prompt("Digite a terceira cor"))

  console.log(coresUsuario)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringUsuario = (prompt("Digite uma frase"))
  return stringUsuario.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const vendaNecessaria = custo / valorIngresso
  return vendaNecessaria
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  checaString = string1.length == string2.length
  return checaString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamArray = array.length
  const ultimaPosicao = tamArray-1
  return array[ultimaPosicao]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const tamArray = array.length
  const ultimaPosicao = tamArray-1;
  [array[0],array[ultimaPosicao]] = [array[ultimaPosicao], array[0]]; 
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Qual é seu ano de nascimento?"))
  const anoCarteira = Number(prompt("Em que ano sua carteira foi emitida?"))
  const idade = anoAtual - anoNascimento
  const tempoCarteira = anoAtual - anoCarteira

  if (idade <= 20) {
    console.log(tempoCarteira >= 5)
  } else if (idade >= 20 && idade <= 50){
    console.log(tempoCarteira >= 10)
  } else {
    console.log(tempoCarteira >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  anoEBissexto = (ano % 400 == 0) || ((ano % 4 == 0) && (ano % 100 !== 0)) 
  return anoEBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?").toLowerCase()
  const ensinoMedio = prompt("Você possui ensino médio completo?").toLowerCase()
  const possuiDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()

  if ((maiorDeIdade === "sim") && (ensinoMedio === "sim") && (possuiDisponibilidade === "sim")) {
    podeMatricular = true;
  } else {
    podeMatricular = false;
  }
  console.log(podeMatricular)
}
