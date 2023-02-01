const express = require("express");

const eventRouter = express.Router();

const eventController = require("../controllers/eventController");

eventRouter.get("/", eventController.getAllevents);
eventRouter.get("/:id", eventController.geteventById);

module.exports = eventRouter;
