import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { createConnection } from "mysql2/promise"

export const ensureDbExists = async () => {
    const connection = await createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
    })
    await connection.query("CREATE DATABASE IF NOT EXISTS `user-management-api-db`")
}
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "user-management-api-db",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})