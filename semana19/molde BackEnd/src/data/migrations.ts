import { BaseDatabase } from "./BaseDatabase";

class createTables extends BaseDatabase {
    public async createTable() {
        const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

            await BaseDatabase.connection.raw(`
                CREATE TABLE IF NOT EXISTS cookenu (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )`)
            .then(() => { console.log("Tabelas criadas") })
            .catch(printError)
    }
}

const createTable = new createTables()

createTable.createTable()