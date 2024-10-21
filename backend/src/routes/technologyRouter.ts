import { Router } from "express";
import TechnologyController from "../controllers/technologyController";

const technologyRouter:Router = Router();
technologyRouter.get("/:id/projects", TechnologyController.getTechnologiesByProject);
export default technologyRouter;