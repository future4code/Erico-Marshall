//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:

//1. Leia o código abaixo:
/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
*/
//a) O que vai ser impresso no console?
//RESPOSTA: No primeiro console irá imprimir "Matheus NAchtergaele", no segundo "Virginia Cavendish" e no terceiro "canal: "Globo", horario: "14h"".


//2. Leia o código abaixo:
/*
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
*/
//a) O que vai ser impresso no console?
//RESPOSTA: No primeiro console irá imprimir "Nome: Juca, Idade: 3, Raça: SRD". No segundo irá imprimir: "Nome: Juba, Idade: 3, Raça: "SRD" e no terceiro console irá imprimir: "Nome: Jubo, idade: 3, Raça: SRD".

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//RESPOSTA: copia as informações do objeto referenciado.


//3. Leia o código abaixo: 
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
*/
//a) O que vai ser impresso no console?
//RESPOSTA: No primeiro console irá imprimir "false" enquanto no segundo "undefined".

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//RESPOSTA: Porque não criamos a propriedade "altura".


//EXERCÍCIOS DE ESCRITA DE CÓDIGO:

//1. Resolva os passos a seguir: 
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

const pessoa = {
    nome: "Luísa",
    apelidos: ["Luli", "Lulinda", "Lu"]
}

function apresentaPessoa(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

apresentaPessoa(pessoa)

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento:

const outrosApelidos = {
    ...pessoa,
    apelidos: ["Lubia", "Lula", "Lubi"]
}

apresentaPessoa(outrosApelidos)


//2. Resolva aos passos a seguir:
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
//RESOLUÇÃO:

const pessoa1 = {
    nome: "Bernardo",
    idade: 24,
    profissão: "Costureiro"
}

const pessoa2 = {
    nome: "Raiê",
    idade: 23,
    profissão: "Revolucionário"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//RESOLUÇÃO:

function dissecaPessoas(objeto) {
    criaArray = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissão, objeto.profissão.length];
    console.log(criaArray)
}

dissecaPessoas(pessoa1)
dissecaPessoas(pessoa2)

//3. Resolva os passos a seguir:
//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho:

const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true):

const primeiraFruta = {
    nome: "Banana",
    disponibilidade: true
}

const segundaFruta = {
    nome: "Morango",
    disponibilidade: true
}

const terceiraFruta = {
    nome: "Carambola",
    disponibilidade: false
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados:

function colocaNoCarrinho(objeto) {
    carrinho.push(objeto)
}

colocaNoCarrinho(primeiraFruta)
colocaNoCarrinho(segundaFruta)
colocaNoCarrinho(terceiraFruta)

//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos:

console.log(carrinho)


//DESAFIOS:
//1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function criaObjetoUsuario() {
    const criaObjeto = {
        nome: prompt("Qual o seu nome?"),
        idade: Number(prompt("Quantos anos você tem?")),
        profissao: prompt("Qual a sua profissão?")
    }
    console.log(criaObjeto)
    console.log(`Seu nome é ${criaObjeto.nome}, você tem ${criaObjeto.idade} anos e você atualmente é ${criaObjeto.profissao}.`)
}

criaObjetoUsuario()

//2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome: 

function comparaFilmes(filme1, filme2) {
    const primeiroAntes = filme1.ano < filme2.ano
    const mesmoAno = filme1.ano == filme2.ano
    console.log("O primeiro filme foi lançado antes do segundo?", primeiroAntes)
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", mesmoAno)
}

filme1 = {
    nome: "Castelo Animado",
    ano: 2005
}

filme2 = {
    nome: "Disney's Hércules",
    ano: 1997
}

comparaFilmes(filme1, filme2)

//3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido:

function atualizaEstoque (objeto) {
    const novaDisponibilidade = !objeto.disponibilidade
    console.log(novaDisponibilidade)
}

atualizaEstoque(primeiraFruta)








