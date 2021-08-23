// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   array.sort((a, b) =>{
      if (a > b) return 1;
      if ( a < b) return -1;
      return 0;
   });
   return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   arrPar = [];
   for (i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrPar.push(array[i]);
      }
   }
   return arrPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   arrPar = [];
   for (i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrPar.push(Math.pow(array[i], 2));
      }
   }
   return arrPar;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  maiorNumero = 0;
  for (let numero of array){
     if(numero > maiorNumero){
        maiorNumero = numero;
     }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const objNumeros = {};
  objNumeros.maiorNumero = Math.max(num1, num2);
  objNumeros.maiorDivisivelPorMenor = Math.max(num1, num2) % Math.min(num1, num2) === 0;
  objNumeros.diferenca = Math.max(num1, num2) - Math.min(num1, num2);
  return objNumeros;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const primeirosPares = []
   for (i = 0; i < n; i++){
      primeirosPares.push(i * 2);
   }
   return primeirosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   if (ladoA === ladoB && ladoA === ladoC) {
      return "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
   novoArray = [];
   array.sort((a, b) => a - b);
   novoArray.push(array[array.length-2]);
   novoArray.push(array[1]);
   return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const atores = filme.atores.toString().replaceAll(",", ", ");
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const pessoaAnonima = {
      ... pessoa,
      nome: "ANÔNIMO"
   }
   return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const pessoasAutorizadas = pessoas.filter(item => (item.idade > 14 && item.idade < 60 && item.altura >= 1.5));
   return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter(item => (item.idade <=14 || item.idade >= 60 || item.altura < 1.5));
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
   contas.forEach((objeto) => {
      let valorComprasTotal = 0;
      objeto.compras.forEach((valor) => {
        valorComprasTotal += valor;
      })
      objeto.saldoTotal -= valorComprasTotal;
      objeto.compras = []
    })
   return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   let consultasOrdemAlfabetica = consultas.sort(function (a, b) {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    })
    return consultasOrdemAlfabetica;
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let consultasPorData = consultas.sort(function (a, b) {
    let arrayDataA = a.dataDaConsulta.split("/");
    let dataA = new Date(arrayDataA[2], arrayDataA[1], arrayDataA[0]).getTime();
    let arrayDataB = b.dataDaConsulta.split("/");
    let dataB = new Date(arrayDataB[2], arrayDataB[1], arrayDataB[0]).getTime();
    if (dataA > dataB) {
      return 1;
    }
    if (dataA < dataB) {
      return -1;
    }
    return 0;
  })
  return consultasPorData;
}