const express = require("express");
const router = express.Router();
const ApiController = require("../controllers/ApiController");
router.get("/", ApiController().all);
module.exports = router;
