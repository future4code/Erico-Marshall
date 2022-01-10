import { connection, performPurchase, verifyAge } from "../src";
import { Casino, LOCATION, NACIONALITY, User, UserChallenge } from "../src/model/interfaces";

describe("index.ts", () => {

    test("verifica a função com saldo maior que compra", () => {
        const user: User = {
            name: "Érico",
            balance: 150
        }

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Érico",
            balance: 110
        })
    })

    test("verifica a função com saldo igual à compra", () => {
        const user: User = {
            name: "Érico",
            balance: 150
        }

        const result = performPurchase(user, 150)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("verifica a função com saldo menor à compra", () => {
        const user: User = {
            name: "Érico",
            balance: 150
        }

        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })

    //TESTES DESAFIOS

    const casinoBR: Casino = {
        name: "Jubileu",
        location: LOCATION.BRAZIL
    }

    const casinoUS: Casino = {
        name: "Djubiley",
        location: LOCATION.EUA
    }

    test("EXERCÍCIO 4A: usuário brasileiro, cassino brasileiro", () => {
        const brazilian: UserChallenge = {
            name: "Raiê",
            age: 23,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = verifyAge(casinoBR, [brazilian])

        expect(result.brazilians.allowed).toEqual(["Raiê"])
    })

    test("EXERCÍCIO 4B: usuário americano, cassino brasileiro", () => {
        const american: UserChallenge = {
            name: "Wanahazas Boy",
            age: 22,
            nacionality: NACIONALITY.AMERICAN
        }
        const result = verifyAge(casinoBR, [american])

        expect(result.americans.allowed).toEqual(["Wanahazas Boy"])
    })

    test("EXERCÍCIO 4C: 2 brasileiros(19 anos), 2 americanos(19 anos), cassino americano", () => {
        const brazilian1: UserChallenge = {
            name: "Raiê novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: UserChallenge = {
            name: "Érico novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: UserChallenge = {
            name: "Erick novinho",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: UserChallenge = {
            name: "Rain novinho",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casinoUS, [american1,american2,brazilian1,brazilian2])

        expect(result.americans.unallowed).toEqual([
            "Erick novinho",
            "Rain novinho"
        ])
        expect(result.brazilians.unallowed).toEqual([
            "Raiê novinho",
            "Érico novinho"
        ])
    })

    test("EXERCÍCIO 4D: 2 brasileiros(19 anos), 2 americanos(21 anos), cassino americano", () => {
        const brazilian1: UserChallenge = {
            name: "Raiê novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: UserChallenge = {
            name: "Érico novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: UserChallenge = {
            name: "Erick novinho",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: UserChallenge = {
            name: "Rain novinho",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casinoUS, [american1,american2,brazilian1,brazilian2])

        expect(result.americans.allowed).toEqual([
            "Erick novinho",
            "Rain novinho"
        ])
        expect(result.brazilians.unallowed).toEqual([
            "Raiê novinho",
            "Érico novinho"
        ])
    })

    test("EXERCÍCIO 5A: usuário brasileiro, cassino brasileiro e tamanho do array allowed > 0 && < 2", () => {
        const brazilian: UserChallenge = {
            name: "Raiê",
            age: 23,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const result = verifyAge(casinoBR, [brazilian])

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })

    test("EXERCÍCIO 5B: : usuário americano, cassino brasileiro e tamanho do array unallowed = 0", () => {
        const american: UserChallenge = {
            name: "Rain",
            age: 23,
            nacionality: NACIONALITY.AMERICAN
        }
        const result = verifyAge(casinoBR, [american])

        expect(result.americans.unallowed.length).toEqual(0)
    })

    test("EXERCÍCIO 5C:  2 brasileiros(19 anos), 2 americanos(19 anos) cassino americano e tamanho unallowed", () =>{
        const brazilian1: UserChallenge = {
            name: "Raiê novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: UserChallenge = {
            name: "Érico novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: UserChallenge = {
            name: "Erick novinho",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: UserChallenge = {
            name: "Rain novinho",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casinoUS, [american1,american2,brazilian1,brazilian2])

        expect(result.americans.unallowed).toEqual([
            "Erick novinho",
            "Rain novinho"
        ])
        expect(result.brazilians.unallowed).toEqual([
            "Raiê novinho",
            "Érico novinho"
        ])
    })

    test("EXERCÍCIO 5D: 2 brasileiros(19 anos), 2 americanos(19 anos), cassino americano e tamanho unallowed BR > 1 e unallowed US < 1 e allowed US = 2", () => {
        const brazilian1: UserChallenge = {
            name: "Raiê novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: UserChallenge = {
            name: "Érico novinho",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const american1: UserChallenge = {
            name: "Erick novinho",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: UserChallenge = {
            name: "Rain novinho",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const result = verifyAge(casinoUS, [american1,american2,brazilian1,brazilian2])

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toEqual(2)
    })

    // test("EXERCÍCIO 6: Create Post", async () => {
    //     const post = {
    //       id: "id do post",
    //       title: "Título",
    //       content: "Conteúdo",
    //     };
    //     try {
    //         await createPost(post);
    //         const postFromDb = await getPostById(post.id);
        
    //         expect(postFromDb).not.toBe(undefined);
    //         expect(postFromDb).toEqual({
    //           id: "id do post",
    //           title: "Título",
    //           content: "Conteúdo",
    //         });
    //     } catch (error) {
    //         console.log(error)
    //     }
    // });
    

    afterAll(() => {
        connection.destroy()
    })
})