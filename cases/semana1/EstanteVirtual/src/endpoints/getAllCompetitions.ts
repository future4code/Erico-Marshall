import { Request, Response } from "express";
import { connection } from "../connection";

export const getAllCompetition = async (req: Request, res: Response) => {
    try {

        const resultado = await connection(`estante_olimpiada_competicoes`)
        
        res.status(200).send({resultado})
        
    } catch (error: any) {
        res.status(500).send({message: error.message || error.sqlMessage})
    }
}