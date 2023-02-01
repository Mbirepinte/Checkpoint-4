const commentModel = require("../models/commentModel");

const commentController = {
  getAllcomments: (req, res, next) => {
    commentModel
      .findAll()
      .then((comments) => res.status(200).send(comments))
      .catch((err) => next(err));
  },
  getcommentById: (req, res, next) => {
    const { id } = req.params;
    commentModel
      .findOne(id)
      .then(([comment]) => res.status(200).send(comment))
      .catch((err) => next(err));
  },
};

module.exports = commentController;
