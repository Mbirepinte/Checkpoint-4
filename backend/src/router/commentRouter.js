const express = require("express");

const commentRouter = express.Router();

const commentController = require("../controllers/commentController");

commentRouter.get("/", commentController.getAllcomments);
commentRouter.get("/:id", commentController.getcommentById);

module.exports = commentRouter;
