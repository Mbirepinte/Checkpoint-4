const express = require("express");

const router = express.Router();
const commentRouter = require("./commentRouter");
const eventRouter = require("./eventRouter");
const friendsRouter = require("./friendsRouter");
const roleRouter = require("./roleRouter");
const userRouter = require("./userRouter");

router.use("/comment", commentRouter);
router.use("/event", eventRouter);
router.use("/friends", friendsRouter);
router.use("/role", roleRouter);
router.use("/user", userRouter);

module.exports = router;
