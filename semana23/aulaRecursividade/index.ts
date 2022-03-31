//EXERCÍCIO 1:
//a)
const printNumbersCresc = (n: number) => {
    if (n >= 0) {
      printNumbersCresc(n - 1)
      console.log(n)
    }
}

//b)
const printNumbersDesc = (n: number) => {
    if (n >= 0) {
      console.log(n)
      printNumbersDesc(n - 1)
    }
}


//EXERCÍCIO 2:
export const calculateSum = (number: number, acc: number = 0): number => {
    if (number === 0) {
      return acc
    }
    return calculateSum(number - 1, acc + number)
}

//EXERCÍCIO 3:
export const calculateSumTo = (n: number): number => {
    let sum = 0
    for (var i = 0 ; i <= n ; i++) {
          sum += i
    }
    return sum
}

//EXERCÍCIO 4:
export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1)
      console.log(`Elemento ${i}: `, arr[i])
    }
}