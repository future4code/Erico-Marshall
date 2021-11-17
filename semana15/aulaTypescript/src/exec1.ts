//a)
const minhaString: string =  "Olá"
//Se tentar atribuir um número após declarar que será uma string,
//o Typescript acusa o erro.
//b)
const meuNumero : number = 2
//para atribuir também uma string, colocamos o |
const outroNumero : number | string = "dois"
//c)
const pessoa: {nome : string, idade: number, corFavorita: string} = {
    nome: "Alyrio",
    idade: 32,
    corFavorita: "Vermelho"
}

//d)

enum CoresDoArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresDoArcoIris
}

const pessoa2: Pessoa = {
    nome: "Lara",
    idade: 31,
    corFavorita: CoresDoArcoIris.AZUL
}

const pessoa3: Pessoa = {
    nome: "Francis",
    idade: 29,
    corFavorita: CoresDoArcoIris.AMARELO
}

const pessoa4: Pessoa = {
    nome: "BenMendes",
    idade: 34,
    corFavorita: CoresDoArcoIris.VERDE
}