```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contagemDeOcorrencias = 0;
  for (i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      contagemDeOcorrencias++;
    }
  }
  if (contagemDeOcorrencias > 0) {
    return `O número ${numeroEscolhido} aparece ${contagemDeOcorrencias}x`;
  } else {
    return `Número não encontrado`;
  }
}
``` 