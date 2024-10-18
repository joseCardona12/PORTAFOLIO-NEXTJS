import { Sequelize } from "sequelize-typescript";
import ProjectModel from "../models/projectModel";
import ProjectTechnologieModel from "../models/projectTechnologieModel";
import TechnologieModel from "../models/technologieModel";
import { configDotenv } from "dotenv";

configDotenv();
const sequelize:Sequelize = new Sequelize({
    dialect: "mysql",   
    port: parseInt(process.env.DB_PORT!),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [ProjectModel, ProjectTechnologieModel, TechnologieModel]
});
export default sequelize;