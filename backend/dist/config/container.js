"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const homeViewService_1 = require("../services/homeViewService");
const homeViewRepository_1 = require("../repositories/homeViewRepository");
const homeViewModel_1 = __importDefault(require("../models/homeViewModel"));
const projectModel_1 = __importDefault(require("../models/projectModel"));
const projectService_1 = __importDefault(require("../services/projectService"));
tsyringe_1.container.registerSingleton(homeViewModel_1.default);
tsyringe_1.container.registerSingleton(homeViewRepository_1.HomeViewRepository);
tsyringe_1.container.registerSingleton(homeViewService_1.HomeViewService);
tsyringe_1.container.registerSingleton(projectModel_1.default);
tsyringe_1.container.registerSingleton(projectService_1.default);
