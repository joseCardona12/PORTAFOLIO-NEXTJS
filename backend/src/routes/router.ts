import { Router } from "express";
import homeViewRouter from "./homeviewRouter";
import projectRouter from "./projectRouter";

const router = Router();
router.use("/homeView", homeViewRouter);
router.use("/projects", projectRouter);

export default router;