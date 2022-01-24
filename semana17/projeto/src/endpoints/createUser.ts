import { Request, Response } from "express"
import { connection } from "../data/connection";
import { User } from "../types";

export const createUser = async (req: Request, res: Response) => {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password) {
         res.statusCode = 422
         throw new Error("Estão faltando parâmetros")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error('A senha deve conter no mínimo seis caracteres');
      }

      if (!email.includes("@")) {
         res.statusCode = 422
         throw new Error('Formato de email inválido');
      }

      const user: User = {
         id:Date.now().toString(),
         name,
         email,
         password
      }

      await connection("labecommerce_users")
         .insert(user)
         res.status(201).send({message: "Usuário criado com sucesso!"})

   } catch (error) {

      if (res.statusCode === 200)
         res.status(500).send({message: "Um erro inesperado ocorreu =/"})

      else
         res.send({message: error.message})
   }

};