import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const token = req.headers.authorization as string

      const page: number = Number(req.query.page) || 1

      if (!token) {
         res.statusCode = 401
         throw new Error("Token inválido")
      }

      const offset = 10 * (page - 1)

      const result = await connection.raw(`
         SELECT user.id, user.name, user.email
         FROM labecommerce_users AS users
         ORDER BY name
         LIMIT 10
         OFFSET ${offset}
      `)

      const feed = result[0].map(toFeedItem)

      res.status(200).send(feed)

   } catch (error) {
      if (res.statusCode === 200)
         res.status(500).send("Um erro inesperado ocorreu =/")
      else
         res.send({message: error.message})
   }
}

const toFeedItem = (input: any): User => input && {
   id: input.id,
   name: input.name,
   email: input.email,
   password: input.password
}