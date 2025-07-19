import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MONGO DB connection failed !!", err);
  });

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

try {
} catch (error) {}

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error: ", error);
      throw error;
    });

    app.listen(port, () => {
      console.log(`App is listening on Port ${port}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/
