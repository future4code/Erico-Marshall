import { Request, Response } from "express"
import { connection } from "../connection"
import { generateId } from "../services/idGenerator"
import { Competition, STATUS_COMPETICAO } from "../types"

export const createCompetition = async (req: Request, res: Response) => {
    try {

        const {competicao} = req.body

        if (!competicao) {
            res.status(422).send({message: "O nome da competição é obrigatório!"})
            return
        }

        const id = generateId()

        const competicaoOlimpiada: Competition = {
            id,
            competicao
        }

        await connection(`estante_olimpiada_competicoes`)
            .insert(competicaoOlimpiada)
        res.status(201).send({message: "Competição criada com sucesso!"})

    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}