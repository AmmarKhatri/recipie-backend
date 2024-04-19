const express = require("express");
const createIngredient = require("./createIngredient");
const authMiddleware = require("../../controllers/authMiddleware");
const getIngredients = require("./getIngredients");
const router = express.Router()
//recipie route registeration
router.post("/create", authMiddleware, createIngredient);
router.get("/", authMiddleware, getIngredients);
module.exports = router;