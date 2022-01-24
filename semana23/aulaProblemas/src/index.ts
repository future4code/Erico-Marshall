//EXERCÍCIO 1: Considere que a gente só possa fazer três operações com `string`: 
// adicionar um caractere ao final dele, remover um caractere do final dele ou 
// substituir um caractere por outro. Dizemos que uma `string` é 'one edit' de outra 
// se ela for o resultado da original a partir de UMA SÓ dessas operações. 
// Escreva um método que determine se uma `string` é  'one edit' de outra.

//Exemplos
    
//`"banan"` é 'one edit' de `"banana"` (remoção de um caracter)
    
//`"bananak"` é 'one edit' de `"banana"` (adição de um caracter)
    
//`"panana"` é 'one edit' de `"banana"` (troca de um caracter)
    
//`"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)

const verifyOneEdit = (term1: string, term2: string):boolean => {
    if (term1.length - term2.length === 1 ||
        term2.length - term1.length === 1) {
            let diffLetters = 0
            for (let letters = 0; letters < term1.length; letters++) {
                if (term1[letters] !== term2[letters]) {
                    diffLetters++
                }
            }
            if (diffLetters > 1) {
                return false
            } else {
                return true
            }
    } else {
        return false
    }
}

console.log(verifyOneEdit("banan", "banana"))
console.log(verifyOneEdit("bananak", "banana"))
console.log(verifyOneEdit("panana", "banana"))
console.log(verifyOneEdit("bananaaa", "banana"))

//EXERCÍCIO 2: Implemente um método que performe uma compressão de string usando a 
// contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um 
// tamanho maior do que a string inicial, seu programa deve retornar a string inicial.

const compressString = (input: string) => {
    const substrings = []
    let lastChar = input[0]
    let charCount = 0

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = char
        }
        charCount++
    }
    substrings.push(lastChar + charCount)
    let result = ""
    for (const key of substrings) {
        result += key
    }
    return result.length > input.length ? input : result
}

console.log(compressString("aabbb"))
console.log(compressString("aabcccccaaa"))
console.log(compressString("accurate"))
console.log(compressString("escola"))
console.log(compressString("accuraaaaaaaaaate"))