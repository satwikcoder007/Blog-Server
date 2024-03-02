const express = require("express");


const routes = express.Router();
//Controllers
const comment = require("../controllers/Comment");
const like = require("../controllers/Like");
const create = require("../controllers/Create");
const Register = require("../controllers/Register");
const Login = require("../controllers/Login");
const Logout = require("../controllers/Logout");
const SendMail = require('../controllers/SendMail');
const ChangePassWord=require("../controllers/ChangePassword");

//Middlewares
const auth = require("../middlewares/auth");
const isStudent = require("../middlewares/isStudent");
const isAdmin = require("../middlewares/isAdmin");


routes.post("/comment", comment);
routes.post("/like", like);
routes.post("/create", create);
routes.post("/register", Register);
routes.put("/login", Login);
routes.get("/logout",auth,Logout);
routes.post("/mail",SendMail);
routes.post("/newpassword",auth,ChangePassWord);

routes.get("/test", auth, (req, res) => {
  res.status(200).json({
    success: true,
    messaage: "Test route visit success",
  });
});
routes.get("/student", auth, isStudent, (req, res) => {
  res.status(200).json({
    success: true,
    messaage: "Student route visit success",
  });
});
routes.get("/admin", auth, isAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    messaage: "Admin route visit success",
  });
});

module.exports = routes;
