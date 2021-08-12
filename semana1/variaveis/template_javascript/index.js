// Exercícios de Interpretação:

/* 1: Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) */

// RESPOSTA: Será impresso no console "10" e após, "5";

/* 2: Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)*/

// RESPOSTA: Será impresso no console "10" "10" "20";

/*3: Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. 
Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. 
Alem disso, os nomes não podem começar com números ou caracteres especiais.

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`) */

/* RESPOSTA: A variável "p" poderia se chamar "horaTrabalhadaDia" enquanto a variável "t"  poderia
se chamar "pagamentoDia" */


//Exercícios de escrita de código:

//EXERCÍCIO NÚMERO 1:

/*
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
*/

/* RESPOSTA: Em ambos os casos foi escrito undefined pois não definimos nenhuma variável, assim, o JS não teve como interpretar
qual o tipo de cada cada uma. */

/*
let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)
*/

// RESPOSTA: Em ambos os casos foi descrito como "string", sendo interpretadas como texto mesmo uma delas contendo apenas números

//console.log("Olá", nome, "você tem", idade, "anos!")

// EXERCÍCIO NÚMERO 2:

/*
let chuva = prompt("Aí está chovendo hoje?")
let almoço = prompt("Você já almoçou hoje?")
let serieLoki = prompt("Você já viu a nova série Loki?")

console.log("Você respondeu", chuva, "para a pergunta 'Aí está chovendo hoje?'")
console.log("Você respondeu", almoço, "para a pergunta 'Você já almoçou hoje?'")
console.log("Você respondeu", serieLoki, "para a pergunta 'Você já viu a nova série Loki?'")
*/

// EXERCÍCIO NÚMERO 3:

let a = 10
let b = 25

//queremos que a tenha o valor de 25 e b o valor de 10

let c = a
a = b
b = c

console.log("O novo valor de a é", a, "e o novo valor de b é", b)

// DESAFIO:

let primeiroNumeroEscrito = prompt("Escolha o primeiro número:")
let segundoNumeroEscrito = prompt("Escolha o segundo número:")

let primeiroNumeroFinal = Number(primeiroNumeroEscrito)
segundoNumeroFinal = Number(segundoNumeroEscrito)

let calculoUm = primeiroNumeroFinal + segundoNumeroFinal
let calculoDois = primeiroNumeroFinal * segundoNumeroFinal

console.log("O primeiro número escolhido somado ao segundo resulta em:", calculoUm)
console.log("O primeiro número escolhido multiplicado pelo segundo resulta em:", calculoDois)
