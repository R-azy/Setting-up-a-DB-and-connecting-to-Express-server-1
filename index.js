require("dotenv").config();
const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const dbUrl = process.env.DB_URL;
mongoose
  .connect(dbUrl)
  .then((data) => {
    console.log(`Connected to MongoDB ${data.connection.host}`);
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
