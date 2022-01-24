import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async(
    req: Request,
    res: Response
): Promise<void> =>{
    try {
        const name = req.query.name || "%"
        const order = req.query.order === "ASC" ? "ASC" : "email"
        // const order = req.query.order === "DESC" ? "DESC" : "name"
        const page = Number(req.query.page) || 1

        const result = await connection("aula49_exercicio")
           .where("name", "LIKE", `%${name}%`)
           .orderBy(order)
           .limit(5)
           .offset(5 * (page - 1))

        const users = result.map(toUser)



       if(!toUser.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 

       res.status(200).send(users)
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password
    }
}