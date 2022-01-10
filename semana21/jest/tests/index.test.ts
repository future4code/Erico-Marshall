import { connection, performPurchase } from "../src";
import { User } from "../src/model/userModel";

describe("index.ts", () => {
    const user: User = {
        name: "Érico",
        balance: 150
    }

    test("verifica a função com saldo maior que compra", () => {

        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Érico",
            balance: 110
        })
    })

    test("verifica a função com saldo igual à compra", () => {

        const result = performPurchase(user, 150)

        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test("verifica a função com saldo menor à compra", () => {

        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })
})