const express = require("express");
const app = express();
const route = require("./api/routes/index");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();
require("./config/database");

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", route);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
