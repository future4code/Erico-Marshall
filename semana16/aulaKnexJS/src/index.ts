import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from "./connection"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

//exercício 1
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    return result[0][0]
}

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("users/", async (req: Request, res: Response) => {
    try {
        const name : string = req.query.name as string
        console.log(await searchActor(name))
        res.end()
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


//exercício 2
const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender,
      })
      .into("Actor");
  };

//exercício 2a
const updateActorSalary = async (
    id: string, 
    salary: number
): Promise<void> => {
    await connection
    .update({
        id: id,
        salary: salary
    })
    .into("Actor")
}

//exercício 2b
const deleteActor = async (
    id: string
): Promise<void> => {
    await connection
    .delete()
    .into("Actor")
    .where(id = id)
}

//exercício 2c
const AvgSalaryByGender = async (
    gender: string, salary: number
) : Promise<void> => {
    await connection
    .avg(salary)
    .into("Actor")
}

//exercício 3
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
      console.log(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.get("/actor", async(req: Request, res: Response) => {
    try {
        const gender = req.query.gender 
        const result = await connection.raw(`
         SELECT COUNT(*) 
         FROM Actor 
         GROUP BY ${gender}
        `)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


//exercício 4

app.post("/actor", async (req: Request, res: Response) => {
    try {
        await createActor(
            req.body.id,
            req.body.name,
            req.body.salary,
            new Date(req.body.dateOfBirth),
            req.body.salary
        )
        res.status(200).send()
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message) 
    }
})

app.put("/actor", async (req: Request, res: Response) => {
    try {
        await updateActorSalary(
            req.body.id,
            req.body.salary
        )
        res.status(200).send({message: "Salário atualizado com sucesso"})
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message) 
    }
})

app.delete("/actor", async (req: Request, res: Response) => {
    try {
        await deleteActor(
           req.body.id
        )
        res.status(200).send({message: "Ator deletado com sucesso"})
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)  
    }
})

// exercício 5
const createMovie = async (
    id: string,
    title: string,
    synopsis: string,
    releaseDate: Date,
    rating: Number,
    playingLimitDate: Date
) => {
    await connection
      .insert({
        id: id,
        nome: title,
        sinopse: synopsis,
        data_de_lancamento: releaseDate,
        rating: rating,
        playing_limit_date: playingLimitDate,
      })
      .into("Filmes")
}
  
app.post("/movie", async (req: Request, res: Response) => {
    try {
      await createMovie(
        req.body.id,
        req.body.title,
        req.body.synopsis,
        req.body.releaseDate,
        req.body.rating,
        req.body.playingLimitDate
      )
      res.status(200).send({
        message: "Success"
      })
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

// exercício 6

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `)
    return result[0]
}
  
app.post("/movie/:id", async (req: Request, res: Response) => {
    try {
      const movies = await getAllMovies()
      res.status(200).send({
        movies: movies,
      })
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const searchMovie = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Filmes WHERE nome = '${name}'
    `)
    return result[0][0]
}

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
      const movies = await searchMovie(req.query.name as string);
      res.status(200).send({
        movies: movies,
      })
    } catch (err) {
      res.status(400).send({
        message: err.message,
      })
    }
  })