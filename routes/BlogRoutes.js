const express = require("express");
const routes = express.Router();

const comment = require("../controllers/Comment");
const like = require("../controllers/Like");
const create = require("../controllers/Create");
const Register = require("../controllers/Register");
const Login = require("../controllers/Login");

routes.post("/comment",comment);
routes.post("/like",like);
routes.post("/create",create);
routes.post("/register",Register);
routes.post("/login",Login);



module.exports = routes;