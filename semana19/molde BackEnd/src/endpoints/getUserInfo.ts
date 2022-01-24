import { Request, Response } from "express"
import { BaseDatabase } from "../data/BaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export async function getUserInfo(req: Request, res: Response) {
   try {    
       const token = req.headers.authorization
       const id = req.body.id

       if(!token) {
           res.status(422).send(`This endpoint needs an authorization`)
       }

       const userDatabase = new UserDatabase()
       const user = await userDatabase.getUserInfo(id)

       res.status(200).send(user)

   } catch (error) {
       res.status(400).send(error.message)
   } 
}