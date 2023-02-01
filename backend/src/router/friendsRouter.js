const express = require("express");

const friendsRouter = express.Router();

const friendsController = require("../controllers/friendsController");

friendsRouter.get("/", friendsController.getAllfriendss);
friendsRouter.get("/:id", friendsController.getfriendsById);

module.exports = friendsRouter;
