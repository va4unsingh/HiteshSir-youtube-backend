import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1 style='color:red'>Please Login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2 style='color:green'>Youtube</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
