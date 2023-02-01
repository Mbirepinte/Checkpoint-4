const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM event")
    .then(([events]) => events);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM event where id = ?", [id])
    .then(([event]) => event);
};

module.exports = { findAll, findOne };
