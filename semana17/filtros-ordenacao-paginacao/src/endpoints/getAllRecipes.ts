import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const title = req.query.title || "%"
      const sort = req.query.sort === "title" ? "title" :  "created_at"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10

      const result = await connection("aula49_recipes")
         .where("title", "LIKE", `%${title}%`)
         .orWhere("description",  "LIKE", `%${title}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(size * (page - 1))

      const recipes = result.map(toRecipe)
      res.status(200).send(recipes)
   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}