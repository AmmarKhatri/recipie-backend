const express = require("express");
const createRecipie = require("./createRecipie");
const authMiddleware = require("../../controllers/authMiddleware");
const listRecipies = require("./listRecipies");
const getRecipie = require("./getRecipie");
const router = express.Router()
//recipie route registeration
router.post("/create", authMiddleware, createRecipie);
router.get("/", authMiddleware, listRecipies);
router.get("/:id", authMiddleware, getRecipie);
module.exports = router;