import { Router } from "express";
import ProjectController from "../controllers/projectController";

const projectRouter:Router = Router();
projectRouter.get("/", ProjectController.getProjects);
projectRouter.get("/:quantity/filter", ProjectController.getProjectByQuantityFilter);
projectRouter.get("/:page/pagination", ProjectController.getProjectByPagination);
export default projectRouter;