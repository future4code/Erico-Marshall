import { Request, Response } from "express";
import { connection } from "../connection";
import { Athlete, Competition, CompetitionResult } from "../types";

export const getCompetitionClassification = async (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const podium = []

        const resCompetition: Competition[] = await connection(`estante_olimpiada_competicoes`)
            .where({id})
        const resultCompetition = resCompetition[0]

        const resultAthlete: Athlete[] = await connection(`estante_olimpiada_atletas`)

        for (let athletes of resultAthlete) {
            if (athletes.competicao === resultCompetition.competicao) {
                podium.push(athletes)
            }
        }

        if (resultCompetition.competicao.includes("dardo")) {
            podium.sort((a,b) => {
                if (a.value > b.value) return 1
                if (a.value < b.value) return -1
                return 0
            })
        } else {
            podium.sort((a,b) => {
                if (a.value < b.value) return 1
                if (a.value > b.value) return -1
                return 0
            })
        }

        const resultClass: CompetitionResult = {
            competicao: resultCompetition.competicao,
            atleta: podium[0].nome,
            value: podium[0].value,
            unidade: podium[0].unidade
        }

        res.status(200).send(resultClass)
        
    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}