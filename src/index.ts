import "reflect-metadata";
import express, { Request, Response } from 'express';
import { AppDataSource, ensureDbExists } from "./dbhelper/db"
import { userRouter } from './routes/user';
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
