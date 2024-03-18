require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World 2!");
});

app.get("/azlan", (req, res) => {
  res.send(`I am Azlan on port ${port}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
