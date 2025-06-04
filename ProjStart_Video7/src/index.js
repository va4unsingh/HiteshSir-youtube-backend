import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*

import express from "express";
const app = express();
const Port = process.env.PORT;

try {
} catch (error) {}

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error: ", error);
      throw error;
    });

    app.listen(Port, () => {
      console.log(`App is listening on Port ${Port}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
