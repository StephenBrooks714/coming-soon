const express = require("express");
const router = express.Router();

const mainController = require("../controllers/pages/mainPageController");
router.get("/", mainController.homePage);

const formController = require("../controllers/forms/sendForm");
router.post("/send/subscriber", formController);

module.exports = router;