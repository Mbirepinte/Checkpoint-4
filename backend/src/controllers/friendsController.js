const friendsModel = require("../models/friendsModel");

const friendsController = {
  getAllfriendss: (req, res, next) => {
    friendsModel
      .findAll()
      .then((friendss) => res.status(200).send(friendss))
      .catch((err) => next(err));
  },
  getfriendsById: (req, res, next) => {
    const { id } = req.params;
    friendsModel
      .findOne(id)
      .then(([friends]) => res.status(200).send(friends))
      .catch((err) => next(err));
  },
  getAllMyFriends: (req, res, next) => {
    const { id } = req.params;
    friendsModel
      .findAllMyFriends(id)
      .then((friends) => res.status(200).send(friends))
      .catch((err) => next(err));
  },
};

module.exports = friendsController;
