//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Leia o código abaixo
/*
function minhaFuncao(variavel) {
	return variavel * 5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/
//a) O que vai ser impresso no console?
//RESPOSTA: 10 e depois 50.

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//RESPOSTA: Não irá aparecer nada.

//2. Leia o código abaixo
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/

//a. Explique o que essa função faz e qual é sua utilidade
//RESPOSTA: Essa função recebe a frase do usuário, a transforma para apenas letras minúsculas e verifica se contém a palavra cenoura.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//     i.   `Eu gosto de cenoura` //true
//     ii.  `CENOURA é bom pra vista` //true
//     iii. `Cenouras crescem na terra` //true


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. Escreva as funções abaixo
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//RESOLUÇÃO A)
/*
function escreveMensagemPronta(){
    console.log(`Eu sou Érico, tenho 23 anos, moro em Porto Alegre e sou estudante`)
}
escreveMensagemPronta()
*/

//RESOLUÇÃO B)
/*
function escreveBio(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos e moro em ${cidade} e sou ${profissao}`)
}

const nome = prompt("Por favor, digite seu nome")
const idade = Number(prompt("Por favor, digite sua idade"))
const cidade = prompt("Por favor, digite qual a cidade que você mora")
const profissao = prompt("Por favor, digite qual sua profissão")

escreveBio(nome, idade, cidade, profissao)
*/


//2. Escreva as funções explicada abaixo: 
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//RESOLUÇÃO A)
/*
function somaNumero(numero1, numero2){
    const numeroFinal = numero1 + numero2
    console.log(numeroFinal)
}
somaNumero(3,2)
*/
//RESOLUÇÃO B)
/*
function comparaNumero(numero1, numero2){
    resultado = numero1 >= numero2
    console.log(resultado)
}
comparaNumero(3, 2)
*/
//RESOLUÇÃO C)
/*
function ehPar(numeroConfere){
    resultado = numeroConfere % 2 == 0
    console.log(`O número escolhido é par? ${resultado}.`)
}
ehPar(3)
ehPar(6)
*/
//RESOLUÇÃO D)
/*
function recebeTexto(textoUsuario){
    console.log(textoUsuario.toUpperCase())
    console.log(textoUsuario.length)
}
recebeTexto(`Frase tudo em minúscula`)
*/


//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
/*
function calculaNumeros() {
    numero1 = Number(prompt("Digite o primeiro número"))
    numero2 = Number(prompt("Digite o segundo número"))

    function somaNumeros(numero1, numero2) {
        resultado = numero1 + numero2
        console.log(`Soma: ${resultado}`)
    }
    somaNumeros(numero1,numero2)

    function subraiNumeros(numero1, numero2) {
        resultado = numero1 - numero2
        console.log(`Diferença: ${resultado}`)
    }
    subraiNumeros(numero1,numero2)

    function multiplicaNumeros(numero1, numero2) {
        resultado = numero1 * numero2
        console.log(`Multiplicação: ${resultado}`)
    }
    multiplicaNumeros(numero1,numero2)

    function divideNumeros(numero1, numero2) {
        resultado = numero1 / numero2
        console.log(`Divisão: ${resultado}`)
    }
    divideNumeros(numero1,numero2)
}
calculaNumeros()
*/

//DESAFIOS:
//1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

//a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

const somaNumeros = (numero1, numero2) => {
    resultado =  numero1 + numero2
    return resultado
}
console.log(somaNumeros(3, 2))

//b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

const somaOutrosNumeros = (numero1, numero2) => {
    resultado = numero1 + numero2
    const somaNumeros = (resultado, numero2) => {
        resultado2 =  resultado + numero2
        return resultado2
    }
    return somaNumeros(resultado, 2)

}
console.log(somaOutrosNumeros(3, 10))


//2.Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

const cateto1 = 40
const cateto2 = 30
function executaPitagoras () {
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
    console.log(`O valor da hipotenusa é de: ${hipotenusa}`)
}
executaPitagoras(cateto1,cateto2)
