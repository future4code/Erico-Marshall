const numberA = process.argv[2];

const operation = process.argv[3];

const numberB = process.argv[4];

const number1 = Number(numberA);
const number2 = Number(numberB);

const doMath = (a, b, c) => {
    if (b === "add") {
        return `Resposta da soma: ${a + c}`;
    } else if (b === "sub") {
        return `Resposta da subtração: ${a - c}`;
    } else if (b === "mult") {
        return `Resposta da multiplicação: ${a * c}`;
    } else if (b === "div") {
        return `Resposta da divisão: ${a / c}`;
    } else {
        return `Insira um valor válido por favor!`;
    };
};

console.log(doMath(number1, operation, number2));