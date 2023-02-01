const express = require("express");

const roleRouter = express.Router();

const roleController = require("../controllers/roleController");

roleRouter.get("/", roleController.getAllroles);
roleRouter.get("/:id", roleController.getroleById);

module.exports = roleRouter;
