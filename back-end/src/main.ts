import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { connectDB } from "./config/connectDB";
import "dotenv/config";

const app: Express = express();

// Connect to MongoDB
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors is a middleware that allows us to make requests from our client
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // allow to server to accept request from different origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());

// use morgan to log requests to the console in dev mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

// Import all routes

export default app;
