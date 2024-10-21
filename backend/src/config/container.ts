import "reflect-metadata";
import { container } from "tsyringe";
import { HomeViewService } from "../services/homeViewService";
import { HomeViewRepository } from "../repositories/homeViewRepository";
import HomeViewModel from "../models/homeViewModel";
import ProjectModel from "../models/projectModel";
import ProjectService from "../services/projectService";
import ProjectRepository from "../repositories/projectRepository";

container.registerSingleton<HomeViewModel>(HomeViewModel);
container.registerSingleton<HomeViewRepository>(HomeViewRepository);
container.registerSingleton<HomeViewService>(HomeViewService);
container.registerSingleton<ProjectModel>(ProjectModel);
container.registerSingleton<ProjectService>(ProjectService);
container.registerSingleton<ProjectRepository>(ProjectRepository)
