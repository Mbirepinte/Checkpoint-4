const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");
const checkEmail = require("../middlewares/checkEmail");
const emailValidator = require("../middlewares/Validator");

userRouter.get("/", userController.getAllusers);
userRouter.post("/login", userController.login);
userRouter.get("/:id", userController.getuserById);
userRouter.put("/:id", userController.updateUser);
userRouter.post(
  "/createprofile",
  checkEmail,
  emailValidator,
  userController.createUser
);

module.exports = userRouter;
