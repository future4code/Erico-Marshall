// Exercícios:
// a) Com o process.argv[].

const username = process.argv[2] || "";
const ageAsString = process.argv[3] || "";

const age = Number(ageAsString);

const writeIntro = (userAge, userName) => {
    const newAge = 7 + age;

    // return `Olá, ${userName}! Você tem ${userAge} anos!`;
    return `Olá, ${userName}! Você tem ${userAge} anos. Em 7 anos você terá ${newAge} anos!`;
}

console.log(writeIntro(age, username));