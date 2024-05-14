require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/motionhitech", (req, res) => {
  res.send("10M+ Visitors !!! On Motion Hi-Tech");
});

app.get("/login", (req, res) => {
  res.send("Login to continue");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
