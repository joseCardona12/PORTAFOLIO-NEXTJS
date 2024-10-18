import { Router } from "express";
import { HomeViewController } from "../controllers/homeViewController";

const homeViewRouter:Router = Router();
homeViewRouter.get("/", HomeViewController.getHomeView);
homeViewRouter.patch("/")

export default homeViewRouter;