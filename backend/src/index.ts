import "./config/container";
import express, { Express } from "express";
import Util from "./utils/util";
import router from "./routes/router";
import { configDotenv } from "dotenv";
import cors from "cors";

configDotenv();
const app: Express = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,DELETE,UPDATE, PUT",
    credentials: true,
  })
);
const PORT: number = parseInt(process.env.PORT!) || 3010;
app.use(express.json());
app.use("/api", router);

Util.startServer(PORT, app);
