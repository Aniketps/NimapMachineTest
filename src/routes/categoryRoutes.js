const express = require("express");
const categories = express.Router();
const categoryController = require("../controllers/categoryControllers.js");
const categoryMiddlewares = require("../middlewares/routeLevel/categoryMiddlewares.js");

categories.get("/", categoryController.getAllCategories);
categories.get("/view", categoryController.viewAllCategories);

categories.post("/new", categoryMiddlewares.addCategory);
categories.post("/new", categoryController.addCategory);

categories.get("/:id", categoryController.getCategoryByID);

categories.get("/-/:name", categoryController.getCategoriesByName);

categories.put("/:id", categoryMiddlewares.updateCategoryByID);
categories.put("/:id", categoryController.updateCategoryByID);

categories.delete("/:id", categoryController.deleteCategoryByID);

module.exports = categories;