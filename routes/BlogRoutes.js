const express = require("express");
const routes = express.Router();

const comment = require("../controllers/Comment");
const like = require("../controllers/Like");

routes.post("/comment",comment);
routes.post("/like",like);

module.exports = routes;