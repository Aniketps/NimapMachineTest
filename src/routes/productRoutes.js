const express = require("express");
const products = express.Router();
const productController = require("../controllers/productControllers.js");
const productMiddlewares = require("../middlewares/routeLevel/productMiddlewares.js");

products.get("/", productController.getAllProducts);
products.get("/view", productController.viewAllProducts);

products.post("/new", productMiddlewares.addProduct);
products.post("/new", productController.addProduct);

products.get("/:id", productController.getProductByID);

products.get("/-/:name", productController.getProductsByName);

products.put("/:id", productMiddlewares.updateProductByID);
products.put("/:id", productController.updateProductByID);

products.delete("/:id", productController.deleteProductByID);

module.exports = products;