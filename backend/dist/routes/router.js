"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeviewRouter_1 = __importDefault(require("./homeviewRouter"));
const projectRouter_1 = __importDefault(require("./projectRouter"));
const router = (0, express_1.Router)();
router.use("/homeView", homeviewRouter_1.default);
router.use("/projects", projectRouter_1.default);
exports.default = router;
