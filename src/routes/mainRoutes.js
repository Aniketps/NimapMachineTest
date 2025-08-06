const express = require("express");
const router = express.Router();
const main = require("../controllers/mainController.js");
const categories = require("./categoryRoutes.js");
const products = require("./productRoutes.js");

router.get("/", main.home);
router.use("/products", products);
router.use("/categories", categories);

module.exports = router;