const express = require("express");
const app = express();
const route = require("./api/routes/index");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();
// require("./config/database");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", route);

app.listen(3001, () => {
  console.log("listening on port 3001");
});
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  //   useUnifiedTopology: true,
});
