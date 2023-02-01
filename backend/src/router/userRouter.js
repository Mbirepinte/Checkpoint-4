const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/", userController.getAllusers);
userRouter.get("/:id", userController.getuserById);

module.exports = userRouter;
