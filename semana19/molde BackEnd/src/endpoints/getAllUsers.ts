import { Request, Response } from "express"
import { BaseDatabase } from "../data/BaseDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export async function getAllUsers(req: Request, res: Response) {
   try {    
       const token = req.headers.authorization

       if(!token) {
           res.status(422).send(`This endpoint needs an authorization`)
       }

       const authenticator = new Authenticator()
       const tokenData = authenticator.getTokenData(token)

       if(tokenData.role !== 'ADMIN') {
           res.status(401).send(`Only admin can acess this endpoint`)
       }

       const userDatabase = new UserDatabase()
       const users = await userDatabase.getAllUsers()

       res.status(200).send(users)

   } catch (error) {
       res.status(400).send(error.message)
   } 
}