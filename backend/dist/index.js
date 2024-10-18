"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/container");
const express_1 = __importDefault(require("express"));
const util_1 = __importDefault(require("./utils/util"));
const router_1 = __importDefault(require("./routes/router"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,UPDATE, PUT",
    credentials: true,
}));
const PORT = parseInt(process.env.PORT) || 3010;
app.use(express_1.default.json());
app.use("/api", router_1.default);
util_1.default.startServer(PORT, app);
