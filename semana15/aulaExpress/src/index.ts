import express, {Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'

const app = express()

app.use(express.json())
app.use(cors())

//ENDPOINT DE TESTE
app.get(
    "/test", 
    (req, res) => {res.send("Olá do Express")}
)

//ENDPOINT DE BUSCAR TODOS OS PAÍSES
app.get(
    "/countries",
    (req: Request, res: Response) => {res.send(countries)}
)

//ENDPOINT DE BUSCAR PAÍS POR ID
app.get(
    "/countries/:id",
    (req: Request, res: Response) => {
        const id = req.params.id

        const result = countries.find((country) => {
            return country.id === Number(id)
        })

        if(result) 
            res.send(result)
         else 
            res.status(404).send("País não encontrado")
})

//ENDPOIT PARA DELETAR UM PAÍS
app.delete(
    "countries/:id", 
    (req: Request, res: Response) => {
        try { 
            const token = req.headers.authorization

            if(!token){
                res.statusCode = 401
               throw new Error("Não autorizado")
            }
            
            const index = countries.findIndex((country) => {
                return country.id === Number(req.params.id)
            })

            if(index === -1) {
                res.statusCode = 404
                throw new Error()
            }
        
            countries.splice(index, 1)

            res.status(204).end()

        } catch (error: any) {

            if (res.statusCode === 200) {
                res.status(500).end()
            } else {
                res.send(error.message)
            }
        }
})

//ENDPOIT DE BUSCAR PAÍS COM FILTROS
app.get(
    "/countries/search?name=:name",
    (req: Request, res: Response) => {
        const name = req.query.name
        const continent = req.query.continent
        const capital = req.query.capite

        let result: country[] = countries

        if (name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )}

        if (capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )}

        if (continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )}

        if(result)
            res.send(result)
        else
            res.status(404).send("País não encontrado")
})

//ENDPOINT DE EDITAR PAÍS
app.put(
    "countries/:id",
    (req: Request, res: Response) => {
        const id = req.params.id

        const result = countries.find((country) => {
            return country.id === Number(id)
        })

        if(result) {
            
        } else {
            res.status(404).send("País não encontrado")
        }
})

app.listen(3003, () => {
    console.log("Server is running on port 3003")
})