"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const projectModel_1 = __importDefault(require("../models/projectModel"));
const projectTechnologieModel_1 = __importDefault(require("../models/projectTechnologieModel"));
const technologieModel_1 = __importDefault(require("../models/technologieModel"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    models: [projectModel_1.default, projectTechnologieModel_1.default, technologieModel_1.default]
});
exports.default = sequelize;
