const express = require("express");
const router = express.Router();
const ApiController = require("../controllers/ApiController");
const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const ContactsRoute = require("./contact");
router.post("/register", AuthController().register);
router.post("/login", AuthController().login);

router.use(AuthMiddleware);
router.use("/contacts", ContactsRoute);
router.get("/chats/", ApiController().getChat);
router.post("/chats/", ApiController().addChat);
router.get("/users", ApiController().all);
module.exports = router;
