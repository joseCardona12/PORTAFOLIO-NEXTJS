"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeViewController_1 = require("../controllers/homeViewController");
const homeViewRouter = (0, express_1.Router)();
homeViewRouter.get("/", homeViewController_1.HomeViewController.getHomeView);
homeViewRouter.patch("/");
exports.default = homeViewRouter;
