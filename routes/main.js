const express = require("express");
const router = express.Router();
const controller = require("../controller/main");

router.get("/solana/:id", controller.creemee);

module.exports = router;