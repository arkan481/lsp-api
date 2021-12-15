import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { errorHandler, validationErrorHandler } from "./middlewares";
import { invokeDb } from "./config";
import { avgRoutes, pcRoutes } from "./routes";

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

invokeDb();

app.use("/pc", pcRoutes);
app.use("/avg", avgRoutes);

app.use(validationErrorHandler);

app.use(errorHandler);

const server = app.listen(5500, () => {
  console.log(`Server is running in port: 5500`);
});

// ! Handling BIG FATAL errors
process
  .on("unhandledRejection", (err: Error) => {
    console.log(`FATAL|Unhandled Rejection: ${err}`);
    server.close(() => {
      process.exit(48);
    });
  })
  .on("uncaughtException", (err: Error) => {
    console.log(`FATAL|Uncaught Exception: ${err}`);
    server.close(() => {
      process.exit(48);
    });
  });
