//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:


//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
//RESPOSTA: irá imprimir a soma do valor acrescido de 1 até chegar a 5, ou seja, 10.

//2. Leia o código abaixo:
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
    }
}
*/
//a) O que vai ser impresso no console?
//RESPOSTA: Irá imprimir todos os números do array maiores de 18.

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//RESPOSTA: Não, deveria então utilizar o for normal.


//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
//RESPOSTA: Irá imprimir 4 linhas, cada uma acrescentando mais um asterisco até chegar em 4.


//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

let petUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (petUsuario === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else if (petUsuario > 0) {
    console.log("Que legal que você tem pets!");
    const nomePets = [];
    for(let contagemPets = 0; contagemPets < petUsuario; contagemPets++) {
        nomePets.push(prompt("Por favor, digite o nome deles um de cada vez!"));
    }
    console.log(`O nome dos pets são:`);
    console.log(nomePets);
} else {
    console.log("Digite um valor válido!");
}


//2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

const arrayOriginal = [55,60,75,80,95,100,115,120];
//a)
for(let numero of arrayOriginal){
    console.log(numero);
}

//b)
for(let numero of arrayOriginal){
    numero = numero / 10;
    console.log(numero);
}

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const arrayPar = (arrayOriginal) => {
    for(let numeroPar of arrayOriginal){
        if (numeroPar % 2 === 0){
            console.log(numeroPar)
        }
    }
}
arrayPar(arrayOriginal);

//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array:

const arrayDasFrases = []

for (let numeroIndex = 0; numeroIndex  < arrayOriginal.length; numeroIndex++){  
    
    arrayDasFrases.push(`O elemento do index ${arrayOriginal.indexOf(arrayOriginal[numeroIndex])} é: ${arrayOriginal[numeroIndex]}`);
}

console.log(arrayDasFrases)

//Outra maneira para imprimir cada valor separado!
//for(let numeroFrase = 0; numeroFrase < arrayDasFrases.length; numeroFrase++) {
//    console.log(arrayDasFrases[numeroFrase])
//}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original:

let maior = 0;

for(let num of arrayOriginal){
    if(num > maior) {
        maior = num;
    }
}

let menor = maior;

for(let num of arrayOriginal){
    if(num < menor) {
        menor = num;
    }
}
console.log(`O maior número é ${maior} e o menor número do array é ${menor}!`)


//DESAFIOS:

//1. Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. 
//Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

const vamosJogar = () => {

    console.log("Vamos jogar!");
    const numeroPensado = Number(prompt("Digite o número que você escolheu!"));
    //const numeroPensado = Math.floor(Math.random() * 10) DESAFIO 2!
    let numeroChutado = Number(prompt("Digite o número que você acha que é!"));
    let tentativas = 1;

    while(numeroPensado !== numeroChutado){
        
        console.log(`O número escolhido foi: ${numeroChutado}`);
        if (numeroChutado > numeroPensado){
            console.log(`Errou. O número escolhido é maior que o pensado!`);
            numeroChutado = Number(prompt("Digite o número que você acha que é!"));
            tentativas++;

        } else if (numeroChutado < numeroPensado) {
            console.log(`Errou. O número escolhido é menor que o pensado.`);
            numeroChutado = Number(prompt("Digite o número que você acha que é!"));
            tentativas++;
        } else {
            console.log('Digite um número válido!');
            numeroChutado = Number(prompt("Digite o número que você acha que é!"));
            tentativas++;
        }
    }
    if (numeroPensado === numeroChutado) {
        console.log(`Acertou!`);
        console.log(`O número de tentavias foi de ${tentativas} chutes!`);
    }
}

vamosJogar()

//2. Uma das principais características de uma boa pessoa programadora é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

//RESPOSTA: Substituir a const numeroPensado por: Math.floor(Math.random() * 10);!