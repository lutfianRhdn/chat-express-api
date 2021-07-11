const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
