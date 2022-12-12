import "reflect-metadata"
import { DataSource } from "typeorm";
import { Impot } from './models/Impot';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "db_exam",
    synchronize: true,
    logging: true,
    entities: [Impot],
    subscribers: [],
    migrations: [],
})