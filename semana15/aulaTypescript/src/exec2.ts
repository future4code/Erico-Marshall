// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )
//     let soma = 0
//     for (let num of numeros) {
//         soma += num
//     }
//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
//     return estatisticas
// }

//a) as entradas são numbers e a saida um objeto de números.

//b)

function obterEstatisticas(numeros: number[]) {
    const numerosOrdenados = numeros.sort((a: number, b: number) => a -b)

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length -1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}