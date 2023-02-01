const eventModel = require("../models/eventModel");

const eventController = {
  getAllevents: (req, res, next) => {
    eventModel
      .findAll()
      .then((events) => res.status(200).send(events))
      .catch((err) => next(err));
  },
  geteventById: (req, res, next) => {
    const { id } = req.params;
    eventModel
      .findOne(id)
      .then(([event]) => res.status(200).send(event))
      .catch((err) => next(err));
  },
};

module.exports = eventController;
