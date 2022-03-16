import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import dotenv from "dotenv"
import { createCompetition } from "./endpoints/createCompetition"
import { getAllCompetition } from "./endpoints/getAllCompetitions"
import { insertAthlete } from "./endpoints/insertAthlete"
import { changeCompetitionStatus } from "./endpoints/changeCompetitionStatus"
import { getCompetitionClassification } from "./endpoints/getCompetitionClass"

const app: Express = express()
app.use(express.json())
app.use(cors())

dotenv.config()

app.post("/competition/create", createCompetition)
app.get("/competition/all", getAllCompetition)
app.put("/competition/:id/edit", changeCompetitionStatus)
app.post("/competition/:id/insert-atlete", insertAthlete)
app.get("/competition/:id/podium", getCompetitionClassification)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo
       console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
       console.error(`Failure upon starting server.`)
    }
})