import { Request, Response } from "express";
import { connection } from "../connection";
import { generateId } from "../services/idGenerator";
import { Athlete, Competition, STATUS_COMPETICAO, UNIDADE_COMPETICAO } from "../types";

export const insertAthlete = async (req: Request, res: Response) => {
try {
    
    const {nome, value, unidade} = req.body
    const {id} = req.params

    const result: Competition[] = await connection(`estante_olimpiada_competicoes`)
    .where({id})
    const competition = result[0]

    const resultAthlete: Athlete[] = await connection(`estante_olimpiada_atletas`)

    if (!competition) {
    res.status(404).send({message: "Competição não existe ou não foi encontrada!"})
    return
    }

    let athleteAparition = resultAthlete.filter((athlete) => {
        return athlete.nome === nome
    })

    if (athleteAparition.length >= 3 && competition.competicao.toLowerCase().includes("dardo")) {
        res.status(403).send({message: "Esse atleta atingiu o limite de inscrições para essa competição!"})
    }

    if (!nome || !value || !unidade) {
        res.status(422).send({message: "Um ou mais parâmetros estão faltando!"})
        return
    }

    if (competition.status === STATUS_COMPETICAO.FECHADA) {
        res.status(403).send({message: "Competição fechada! Não é mais possivel adicionar um atleta!"})
        return
    }

    if (competition.competicao.toLowerCase().includes("dardo") && unidade !== UNIDADE_COMPETICAO.METROS) {
        res.status(400).send({message: "Unidade errada para essa competição! Dardos devem ser 'm'!"})
        return
    }

    if (!competition.competicao.toLowerCase().includes("dardo") && unidade === UNIDADE_COMPETICAO.METROS) {
        res.status(400).send({message: "Unidade errada para essa competição! Corridas devem ser 's'!"})
        return
    }

    const idAtleta = generateId()

    const athlete: Athlete = {
        id: idAtleta,
        nome,
        competicao: competition.competicao,
        value,
        unidade
    }

    await connection(`estante_olimpiada_atletas`)
        .insert(athlete)
    res.status(201).send({message: "Atleta adicionado à competição com sucesso!"})

} catch (error: any) {
    res.status(500).send({message: error.message || error.sqlMessage})
}
}