import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost/api-w-type')

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Olá");
});

app.listen(3000, () => {
  console.log("Server running on port 3000 ❤️");
});''
