const express = require("express");
const router = express.Router();
const ContactController = require("../controllers/ContactController");

router.get("/", ContactController().all);
router.get("/:id", ContactController().show);
router.post("/", ContactController().store);
router.delete("/:id", ContactController().remove);
module.exports = router;
