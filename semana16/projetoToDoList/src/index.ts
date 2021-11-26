import express, {Express, Request, Response} from 'express'
import {AddressInfo} from 'net'
import cors from 'cors'
import connection from './connection'

const app: Express = express()
app.use(express.json())
app.use(cors())

//ENDPOINT PARA CRIAR USUÁRIO
app.post("/users", async (req: Request, res: Response): Promise<void> => {
    let codeError: number = 400
    try {
        const {name, nickname, email} = req.body
        const id = Date.now().toString()
        if (!name || !nickname || !email) {
            codeError = 422
            throw new Error(`The fields are not fullfiled`)
        }
        if (!email.includes("@") || !email.includes(".com")) {
            codeError = 406
            throw new Error(`The email is not valid`)
        }
        await connection.raw(`
        INSERT INTO TodoListUser 
        VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}")
        `)
        res.status(201).send("Usuário Criado com sucesso!")
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
})

//ENDPOINT PARA BUSCAR USUÁRIO PELO ID
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = '${id}'
    `)
    return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      console.log(await getUserById(id))
      res.end()
    } catch (error) {
        res.status(400).send({message: error.sqlMessage || error.message})
    }
})

//ENDPOINT PARA ATUALIZAR UM USUÁRIO
const updateUserInfo = async ( 
    name: string,
    nickname: string,
    email: string
): Promise<void> => {
    await connection
    .update({
        name,
        nickname,
        email
    })
    .into("TodoListUser")
}

app.put("/users", (req: Request, res: Response) => {
    let codeError: number = 400
    try {
      const {name, nickname, email} = req.body
      if(!name || !nickname || !email ) {
        codeError = 422
        throw new Error("Por favor, verifique os campos")
      }
      res.status(201).send("Usuário atualizado com sucesso!")
    } catch (error : any) {
      res.status(codeError).send({message : error.sqlMessage || error.message})
    }
  })

//ENDPOINT PARA CRIAR UMA TAREFA
const createTask = async (
    id: string,
    title: string,
    description: string,
    limitDate: Date,
    creatorUserId: string
): Promise<void> => {
    await connection
    .insert({id, title, description, limitDate, creatorUserId})
    .into("TodoListTask")
}

app.post("/task", async (req: Request, res: Response) => {
    try {
       await createTask(
          req.body.id, 
          req.body.title, 
          req.body.description, 
          req.body.limitDate,
          req.body.creatorUserId
       )
       res.status(200).send()
    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})