//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

//1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

/*
let array
console.log('a. ', array)
RESPOSTA: Undefined 

array = null
console.log('b. ', array)
RESPOSTA: null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
RESPOSTA: 11

let i = 0
console.log('d. ', array[i])
RESPOSTA: 3

array[i+1] = 19
console.log('e. ', array)
RESPOSTA: irá modificar o segundo elemento do array para 19

const valor = array[i+6]
console.log('f. ', valor)
RESPOSTA: 9
*/

//2. Leia o código abaixo com atenção:

/*
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
RESPOSTA: irá pegar a frase escrita, transformando todos os caracteres para letras maiúsculas e substituindo todos os A's por I's 
e por fim informará o tamanho da frase.
A frase impressa será: SUBI NUM ONIBUS EM MIRROCOS
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem: O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

/*
RESOLUÇÃO
const nomeDoUsuario = prompt("Por favor, qual será o nome do usuário?")
const emailDoUsuario = prompt("Por favor, digite seu email:")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)
*/

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

/*
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
*/

/*
RESOLUÇÃO:

const comidasPreferidas = ["Sushi", "Pizza", "Chocolate", "Kibe com tofupiri", "Bala de coco"]
//a)
console.log(comidasPreferidas)

//b)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c) 
const comidaUsuario = prompt("Qual a sua comida favorita?")
comidasPreferidas[1] = comidaUsuario
console.log(comidasPreferidas)
*/

//3. Faça um programa, seguindo os passos:

/*
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no consoleImprima no console
*/

/*
const listaDeTarefas = []
const tarefa1 = prompt("Digite a primeira tarefa:")
listaDeTarefas.push(tarefa1)

const tarefa2 = prompt("Digite a segunda tarefa:")
listaDeTarefas.push(tarefa2)

const tarefa3 = prompt("Digite a terceira tarefa:")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

const indiceTarefaUsuario = prompt("Digite o índice da tarefa que você já realizou:")
const indiceTarefa = indiceTarefaUsuario-1
listaDeTarefas.splice(indiceTarefa, 1)

console.log(listaDeTarefas)
*/

//-----DESAFIOS------

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços:


const fraseUsuario = prompt("Digite uma frase, por favor:")
const fraseUsuarioSeparada = fraseUsuario.split(" ")

const fraseEmArray = []
fraseEmArray.push(fraseUsuarioSeparada)
console.log(fraseUsuarioSeparada)

//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

const listaComidas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"]
console.log("Abacaxi está no índice:",listaComidas.indexOf("Abacaxi"),"O tamanho do array é de:", listaComidas.length, "elementos!")






