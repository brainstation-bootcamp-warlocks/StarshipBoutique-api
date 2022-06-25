const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to Starship Boutique");
});

app.listen(PORT, () => {
  console.log(`listening on ${BACKEND_URL}: ${PORT}`);
});
