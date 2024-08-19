import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connetDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//configure env
dotenv.config();

//database config
connetDb();
//rest object
const app = express();

//middeleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

const PORT = process.env.PORT || 7000;

//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to TanZero</h1>");
});

//run listen
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`.bgCyan.white);
});
