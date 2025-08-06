const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const router = require("./routes/mainRoutes.js");
require("./databases/nimapMainDatabase.js");

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use("/api", router);

module.exports = app;