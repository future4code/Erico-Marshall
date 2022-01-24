import { connection } from "../data/connection";
import { Response, Request } from "express";
import { Product } from "../types";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            throw new Error("Estão faltando parâmetros")
        }
        const product: Product = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }
        await connection("labecommerce_products")
            .insert(product)
            res.status(201).send({message:"Produto criado com sucesso!"})

    } catch (error) {
        if (res.statusCode === 200)
            res.status(500).send("Um erro inesperado ocorreu =/")
        else
            res.send({message: error.message})
    }
}