const express = require("express");

const friendsRouter = express.Router();

const friendsController = require("../controllers/friendsController");

friendsRouter.get("/", friendsController.getAllfriendss);
friendsRouter.get("/:id", friendsController.getfriendsById);
friendsRouter.get("/myfriends/:id", friendsController.getAllMyFriends);
friendsRouter.delete("/:friendsId", friendsController.deleteFriend);

module.exports = friendsRouter;
