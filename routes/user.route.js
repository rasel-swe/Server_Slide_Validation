const express = require("express");
const { userLoginValidator, userRegistrationValidator } = require("../validation/user.auth");
const { runValidation } = require("../validation/user.validate");
const { registerUser, loginUser } = require("../controllers/user.controller");

const userRoutes = express.Router();

userRoutes.post(
  "/register",
  userRegistrationValidator,
  runValidation,
  registerUser
);

userRoutes.post("/login", userLoginValidator, runValidation, loginUser);

module.exports = userRoutes;