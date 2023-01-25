const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
const categories = require("./datas/categories.json");
app.get("/", (req, res) => {
  res.send("news api running on the");
});

app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.listen(port, () => {
  console.log("server is running on the ", port);
});
