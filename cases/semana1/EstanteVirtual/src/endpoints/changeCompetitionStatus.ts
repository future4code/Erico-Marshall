import { Request, Response } from "express";
import { connection } from "../connection";
import { STATUS_COMPETICAO } from "../types";

export const changeCompetitionStatus = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const {status} = req.body
    
        if (!status) {
            res.status(422).send({message: "Um ou mais parâmetros estão faltando!"})
            return
        }

        if (status !== STATUS_COMPETICAO.ABERTA && status !== STATUS_COMPETICAO.FECHADA) {
            res.status(422).send({message: "O status da competição está incorreto! Escreva 'aberta' ou 'fechada'!"})
            console.log(status)
            console.log(STATUS_COMPETICAO.ABERTA)
            return
        }
        
        await connection
        .update({
            status: status
        })
        .where({id})
        .into(`estante_olimpiada_competicoes`)
        res.status(200).send({message: "Status da competição alterado com sucesso!"})

    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}