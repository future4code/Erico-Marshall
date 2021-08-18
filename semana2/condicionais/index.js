//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:


//1. Leia o código abaixo:
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/

//a) Explique o que o código faz. Qual o teste que ele realiza? 
//RESPOSTA: O código pega a resposta do usuário, transforma em Number e após testa se ele tem resto em divisão por 2.

//b) Para que tipos de números ele imprime no console "Passou no teste"?
//RESPOSTA: Para números pares.

//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//RESPOSTA: Para números ímpares.


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
*/

//a) Para que serve o código acima?
//RESPOSTA: Para imprimir o preço da fruta que o usuário quer consultar.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//RESPOSTA: O preço da fruta Maçã é R$ 2.25.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//RESPOSTA: Irá retornar o vaor de "default".


//3. Leia o código abaixo: 
/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
*/

//a) O que a primeira linha está fazendo?
//RESPOSTA: Transformando a resposta do usuário de string para number.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//RESPOSTA: No terminal irá aparecer a mensagem "Esse número passou no teste!". Se fosse -10 não passaria.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//RESPOSTA: Sim. Pois a let mensagem está em escopo local, tentando ser chamada em escopo global.


//EXERCÍCIOS DE ESCRITA DE CÓDIGO:


//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

const podeDirigir = (idadeUsuario) => {
    if (idadeUsuario >= 18) {
        console.log("Parabéns! Você pode dirigir!");
    } else {
        console.log("Você ainda não pode dirigir!");
    }
}

//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.
const idadeUsuario = Number(prompt("Qual a sua idade?"));

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."
podeDirigir(idadeUsuario);


//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else:

const imprimeOla = (turnoEstudante) => {
    if (turnoEstudante === 'M') {
        console.log('Bom Dia!');
    } else if (turnoEstudante === 'T') {
        console.log('Boa Tarde!');
    } else if (turnoEstudante === 'N') {
        console.log('Boa Noite!')
    } else {
        console.log('Digite um turno válido!')
    }
}

const turnoEstudante = prompt("Olá! Em que turno você estuda? Para manhã, digite 'M'. Para tarde, digite 'T'. Para noite, digite 'N'.").toUpperCase();
imprimeOla(turnoEstudante);


//3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const imprimeOlaSwitch = (turnoEstudante) => {
    switch(turnoEstudante) {
        case 'M':
            console.log('Olá, Bom dia!');
            break;
        case 'T':
            console.log('Olá, Boa tarde!');
            break;
        case 'N':
            console.log('Olá, Boa noite!');
            break;
        default:
            console.log('Por favor, digite um turno válido!');
    }
}

//imprimeOlaSwitch(turnoEstudante);


//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoFilme = prompt('Qual o gênero do filme que você quer assistir?').toLowerCase();
const valorIngresso = Number(prompt('Qual o valor do ingresso?'));

const verificaFilme = (generoFilme, valorIngresso) => {
    if (generoFilme === 'fantasia' && valorIngresso < 15) {
        console.log('Bom filme!');
    } else {
        console.log('Escolha outro filme :(');
    }
}

verificaFilme(generoFilme,valorIngresso);


//DESAFIOS:

//1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const verificaFilmeComLanche = (generoFilme, valorIngresso) => {
    if (generoFilme === 'fantasia' && valorIngresso < 15) {
        const lanche = prompt('Qual lanchinho você vai comprar?');
        console.log(`Bom filme! e aproveite o seu ${lanche}!`);
    } else {
        console.log('Escolha outro filme :(');
    }
}

verificaFilmeComLanche(generoFilme,valorIngresso);

//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
/*
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos;
*/

const imprimeNota = () => {

    const nomeCompleto = prompt("Qual o seu nome completo?");
    const tipoDeJogo = prompt("Qual o tipo de jogo? Responda 'IN' para Internacional e 'DO' para doméstico!").toUpperCase();
    const etapaJogo = prompt("Qual a etapa do jogo? Responda 'SF' para semi-final, 'DT' para decisão de terceiro lugar e 'FI' para final.").toUpperCase();
    const categoriaJogo = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4?"));
    const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"));

    if (tipoDeJogo === 'DO') {
        
        console.log('---Dados da Compra---');
        console.log('Nome do cliente: ',nomeCompleto);
        console.log('Tipo do jogo: Nacional');

    } else if (tipoDeJogo === 'IN') {
        
        console.log('---Dados da Compra---');
        console.log('Nome do cliente: ',nomeCompleto);
        console.log('Tipo do jogo: Internacional');

    }

        if (etapaJogo === 'SF') {
            if (categoriaJogo === 1) {
                const valorIngresso = 1320;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Semi-Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
                
            } else if (categoriaJogo === 2) {
                const valorIngresso = 880;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Semi-Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
                
            } else if (categoriaJogo === 3) {
                const valorIngresso = 550;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Semi-Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
                
            } else if (categoriaJogo === 4) {
                const valorIngresso = 220;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Semi-Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else {
                console.log('Digite uma categoria de jogo válida!');
            }

        } else if (etapaJogo === 'DT') {
            if (categoriaJogo === 1) {
                const valorIngresso = 660;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Decisão do terceiro lugar');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 2) {
                const valorIngresso = 440;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Decisão do terceiro lugar');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 3) {
                const valorIngresso = 330;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Decisão do terceiro lugar');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 4) {
                const valorIngresso = 170;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Decisão do terceiro lugar');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else {
                console.log('Digite uma categoria de jogo válida!');
            }
        } else if (etapaJogo === 'FI') {
            if (categoriaJogo === 1) {
                const valorIngresso = 1980;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 2) {
                const valorIngresso = 1320;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 3) {
                const valorIngresso = 880;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else if (categoriaJogo === 4) {
                const valorIngresso = 330;
                const valorTotal = quantidadeIngressos * valorIngresso;
                console.log('Etapa do jogo: Final');
                console.log('Quantidade de ingressos:', quantidadeIngressos, 'ingressos.');
                console.log('---Valores---');
                if (tipoDeJogo === 'IN') {
                    const valorDolarIngresso = valorIngresso * 0.24;
                    const valorDolarTotal = valorDolarIngresso * quantidadeIngressos;
                    console.log('Valor do ingresso:  U$', valorDolarIngresso);
                    console.log('Valor total:  U$ ', valorDolarTotal);
                } else {
                console.log('Valor do ingresso:  R$', valorIngresso);
                console.log('Valor total:  R$ ', valorTotal);
                }
            } else {
                console.log('Digite uma categoria de jogo válida!');
            }
        } else {
            console.log("Digite uma etapa de jogo válida!");
        }
}

imprimeNota()