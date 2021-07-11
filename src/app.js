const express = require("express");
const app = express();
const route = require("./api/routes/index");

require("dotenv").config();
require("./config/database");

app.use("/", route);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
