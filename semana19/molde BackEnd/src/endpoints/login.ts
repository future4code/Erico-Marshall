import { hash } from "bcryptjs";
import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response) {
    try {
        const {email, password} = req.body

        if (!email ||!password) {
            res.status(422)
            .send(`Please insert all the requested information`)
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (!user) {
            res.status(409)
            .send(`This email has not been registered yet`)
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())

        if (!passwordIsCorrect) {
            res.status(401).send(`The email or password is incorrect`)
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message:"The user has been sucessfully logged-in", token})

    } catch (error: any) {
        res.status(400).send(error.message);
    }
}