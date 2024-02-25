const express = require("express");
const routes = express.Router();

const comment = require("../controllers/Comment");

routes.post("/comment",comment);

module.exports = routes;