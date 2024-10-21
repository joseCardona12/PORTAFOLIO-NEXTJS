import { Router } from "express";
import homeViewRouter from "./homeviewRouter";
import projectRouter from "./projectRouter";
import technologyRouter from "./technologyRouter";

const router = Router();
router.use("/homeView", homeViewRouter);
router.use("/projects", projectRouter);
router.use("/technologies", technologyRouter)

export default router;