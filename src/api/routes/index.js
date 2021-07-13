const express = require("express");
const router = express.Router();
const ApiController = require("../controllers/ApiController");
const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.post("/register", AuthController().register);
router.post("/login", AuthController().login);

router.use(AuthMiddleware);
router.get("/users", ApiController().all);
module.exports = router;
