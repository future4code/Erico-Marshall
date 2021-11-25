import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from "./data";
import { User } from './types';

const app = express()
app.use(express.json())
app.use(cors())

//ENDPOINT DE BUSCAR TODOS OS USUÁRIOS COM O MÉTODO HTTP GET
app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 404
    try {
      res.send(users)
    } catch (error) {
      res.status(codeError).send('Lista de usuários não encontrada')
    }
})

//ENDPOINT DE BUSCAR USUÁRIO PELO NOME (exercício 3)
//a)Query params.
app.get("/users/search", (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name === name)
    //b) Lógica para retornar mensagem de erro caso nenhum usuário tenha sido encontrado.
    if (!user) {
      codeError = 404
      throw new Error('Usuário não encontrado')
    }
    res.status(200).send(user)
  } catch(error: any) {
    res.status(codeError).send({message: error.message})
  }
})

//ENDPOINT PARA BUSCAR USUÁRIO PELO ID COM PARAMS
app.get("/users/search/:id", (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const id: number = Number(req.params.id)
    if (isNaN(id)) {
      codeError = 422 //unprocessable entity
      throw new Error("Valor inválido para a ID. Por favor, mande um número.")
    }
    const user = users.find((user) => {
      return user.id === id
    })
    if(!user) {
      codeError = 404
      throw new Error("Usuário não encontrado")
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(codeError).send({message: error.message})
  }
})

//ENDPOINT PARA CRIAR UM NOVO USUÁRIO (exercício 4)
app.post("/users", (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    // const id = req.body.id
    // const name = req.body.name
    const {id, name, email, type, age} = req.body
    if(!id || !name || !email || !type || !age) {
      codeError = 422
      throw new Error("Por favor, verifique os campos")
    }
    const newUser: User = {
      id, //mesma coisa que id = id(do req.body acima)
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(201).send("Usuário criado com sucesso!")
  } catch (error : any) {
    res.status(codeError).send({message : error.message})
  }
})

//ENDPOINT PARA ATUALIZAR UM USUÁRIO (exercício 4a)
app.put("/users", (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const {id, name, email, type, age} = req.body
    if(!id || !name || !email || !type || !age) {
      codeError = 422
      throw new Error("Por favor, verifique os campos")
    }
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(newUser)
    res.status(201).send("Usuário atualizado com sucesso!")
  } catch (error : any) {
    res.status(codeError).send({message : error.message})
  }
})



// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
