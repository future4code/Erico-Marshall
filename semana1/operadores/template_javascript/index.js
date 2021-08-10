// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Leia o código abaixo. Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

//RESPOSTA: resultado = false


resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

//RESPOSTA: resultado = false


resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

//RESPOSTA: resultado = true


console.log("d. ", typeof resultado)

//RESPOSTA = booleano
*/


//2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

/*
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/
//RESPOSTA: Irá aparecer a união das strings, sendo "primeiroNumerosegundoNumero".


//3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

//RESPOSTA: O problema é que as variáveis estão sendo interpretadas como string e não números. Como solução, basta acrescentar antes do prompt, nas variáveis, o "Number" ex: Number(prompt("Digite um número")).



//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

/*1.a) Pergunte a idade do usuário

    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/

/*
const idadeUsuario = Number(prompt("Olá! Quantos anos você tem?"))
const idadeAmigo = Number(prompt("Agora, quantos anos tem seu/sua amigx?"))

const diferençaIdade = idadeUsuario - idadeAmigo
const maiorIdade = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu amigo?", maiorIdade)
console.log("A diferença de idade entre vocês é de: ",diferençaIdade)
*/


//2. Faça um programa que:
/*a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
*/

/*
const numeroPar = Number(prompt("Olá! Por favor, insira um numero par:"))

const restoDivisao = numeroPar % 2

console.log("O resto do teu número dividido por 2 é igual a:", restoDivisao) //RESPOSTA C: Sendo um numero par dividido por 2, nunca terá resto.
*/
// RESPOSTA D: Se um número ímpar for dividido por 2, sempre terá resto.



//3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console: 
/*a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas
*/

/*
const idadeUsuario = Number(prompt("Olá! Por favor, qual a sua idade?"))

const idadeMeses = idadeUsuario * 12
const idadeDias = idadeUsuario * 365.25
const idadeHoras = idadeDias * 24

console.log("Uau! Você sabia? Você já viveu por",idadeMeses,"meses ou,",idadeDias,"dias, ou",idadeHoras,"horas!!!")
*/


//4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
/*
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/

/*
const primeiroNumero = Number(prompt("Por favor, digite um número:"))
const segundoNumero = Number(prompt("Por favor, digite agora um outro número:"))

resultado = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo?", resultado)

resultado = primeiroNumero == segundoNumero
console.log("O primeiro número é igual ao segundo?", resultado)

resultado = typeof(primeiroNumero) == typeof(segundoNumero)
console.log("O primeiro número é divisivel pelo segundo?", resultado)

resultado = typeof(segundoNumero) == typeof(primeiroNumero)
console.log("O segundo número é divisível pelo primeiro?", resultado)
*/


//DESAFIOS

//1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
/*
- Graus Fahrenheit(°F) para Kelvin(K)

    (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

- Graus Celsius(°C) para Graus Fahrenheit (°C)

    (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
*/

/*
let fahrenheit = 77
let celsius = 80

let fahrenheitKelvin = (fahrenheit - 32)*(5/9) + 273.15
console.log("A conversão de 77 graus Fahrenheit em Kelvin é igual a:",fahrenheitKelvin)

let celsiusFahrenheit = celsius*(9/5) + 32
console.log("A conversão de 80 graus Celsius em graus Fahrenheit é igual a:", celsiusFahrenheit)


function conversaoTemp() {
    let celsiusFahrenheit = celsius*(9/5) + 32
    console.log("A conversão de graus Celsius em graus Fahrenheit é igual a:", celsiusFahrenheit)

    let fahrenheitKelvin = (celsiusFahrenheit - 32)*(5/9) + 273.15
    console.log("A conversão de graus Fahrenheit em Kelvin é igual a:",fahrenheitKelvin)
}

celsius = 30
conversaoTemp()

celsius = Number(prompt("Escolha uma temperatura em graus Celsius para converter em graus Fahrenheit e Kelvin!"))
conversaoTemp()
*/





//2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.

//a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
/*
let quilowattHora = 280

const calculoGastoEnergia = quilowattHora * 0.05

console.log("Uma casa que consome",quilowattHora," Quilowatt-hora, gasta um total de:", calculoGastoEnergia, "reais!")
*/

//b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
/*
let quilowattHora = Number(prompt("Quantos Quillowatt-Hora você gastou?"))

const calculoGastoEnergia = quilowattHora * 0.05
const descontoPagamento = calculoGastoEnergia * 0.85

console.log("Uma casa que consome",quilowattHora," Quilowatt-hora, gasta um total de:",calculoGastoEnergia , "reais, porém podemos te oferecer desconto, resultando um total de: ",descontoPagamento, "reais!")
*/

//3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:

//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 

let libra = 20
let conversaoLibraQuilo = libra / 2.205

console.log(libra,"libras equivalem a", conversaoLibraQuilo, "quilos!")

//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 

let onca = 10.5
let conversaoOncaQuilo = onca / 3.527

console.log(onca,"onças equivalem a", conversaoOncaQuilo, "quilos!")

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 

let milha = 100
let conversaoMilhaMetro = milha * 1609

console.log(milha,"milhas equivalem a", conversaoMilhaMetro,"metros!")

//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 

let pes = 50
let conversaoPesMetro = pes / 3.281

console.log(pes,"pés equivalem a",conversaoPesMetro,"metros!")

//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 

let galao = 103.56
let conversaoGalaoLitro = galao * 3.78541

console.log(galao,"galões equivalem a",conversaoGalaoLitro,"litros!")

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 

let xicara = 450
let conversaoXicaraLitro = xicara / 3.52

console.log(xicara,"xícaras equivalem a", conversaoXicaraLitro,"litros!")

//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

let xicaraUsuario = Number(prompt("Qual a quantidade de xicaras que você deseja converter para litros?"))
let conversaoXicaraLitroUsuario = xicaraUsuario / 3.52

console.log(xicaraUsuario,"xícaras equivalem a", conversaoXicaraLitroUsuario,"litros!")












