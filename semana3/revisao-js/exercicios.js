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

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}