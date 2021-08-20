//---------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO---------

//1. Leia o código abaixo:
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]
  
const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
})
*/
//a) O que vai ser impresso no console?
//RESPOSTA: Irá imprimir cada item do array separados pelo objeto.

//2. Leia o código abaixo: 
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
})
  
console.log(novoArrayB)
*/
//a) O que vai ser impresso no console?
//RESPOSTA: Um novo array com apenas os nomes dos objetos do array usuários.

//3. Leia o código abaixo:
/*
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
})
  
console.log(novoArrayC)
*/
//a) O que vai ser impresso no console?
//RESPOSTA: Irá imprimir apenas os objetos do array que não tem como apelido "Chijo".


//---------EXERCÍCIOS DE ESCRITA DE CÓDIGO---------

//1.Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos:

const apenasNomePets = pets.map((item, index, array) => {
    return item.nome
})
console.log(apenasNomePets);

//b) Crie um novo array apenas com os cachorros salsicha:

const apenasSalsichas = pets.filter((item, index, array) => {
    return item.raca === 'Salsicha'
})
console.log(apenasSalsichas);

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const apenasPoodles = pets.filter((item) => {
    return item.raca === 'Poodle'
})

const promoPoodles = apenasPoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(promoPoodles);


//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item:

const apenasNomesProdutos = produtos.map((item) => {
    return item.nome
})
console.log(apenasNomesProdutos);

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles:

const promoProdutos = produtos.map((item) => {
    const nome = item.nome
    const preco = Math.round((item.preco * 0.95)* 100)/100;
    return {nome, preco};
})
console.log(promoProdutos);

//c) Crie um novo array que contenha apenas os objetos da categoria bebidas:

const apenasBebidas = produtos.filter((item) => {
    return item.categoria === 'Bebidas'
})

console.log(apenasBebidas);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê":

const apenasProdutosYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

console.log(apenasProdutosYpe);

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê":

const declaraProdutosYpe = apenasProdutosYpe.map((item) =>{
    return `Compre ${item.nome} por R$ ${item.preco} reais!`
})

console.log(declaraProdutosYpe);


//---------DESAFIOS---------

//1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética:
//RESOLUÇÃO:

const nomePokemons = pokemons.map((item) =>{
    return item.nome;
})

const ordemAlfabetica = (item) => {
    console.log(item.sort());
}

ordemAlfabetica(nomePokemons);

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição:
//RESOLUÇÃO:

const apenasTiposPokemons = pokemons.map((item) => {
    return item.tipo;
})

const tiposSemRepetir = (objeto) => {
    return objeto.filter((valor, index) => objeto.indexOf(valor) === index);
}

console.log(tiposSemRepetir(apenasTiposPokemons));