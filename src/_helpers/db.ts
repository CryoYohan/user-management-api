import "reflect-metadata";
import { DataSource } from "typeorm";
import * as mysql from "mysql2/promise";
import * as fs from "fs";
import * as path from "path";

// Load configuration from ormconfig.json
const ormConfigPath = path.join(__dirname, "../../ormconfig.json");
const rawConfig = fs.readFileSync(ormConfigPath, "utf8");
const ormConfig = JSON.parse(rawConfig);

export const AppDataSource = new DataSource(ormConfig);

export const ensureDbExists = async () => {
    const connection = await mysql.createConnection({
        host: ormConfig.host,
        port: ormConfig.port,
        user: ormConfig.username,
        password: ormConfig.password,
    });

    await connection.query(
        `CREATE DATABASE IF NOT EXISTS \`${ormConfig.database}\`;`
    );
    await connection.end();
};