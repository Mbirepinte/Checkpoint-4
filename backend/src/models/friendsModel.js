const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM friends")
    .then(([friendss]) => friendss);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM friends where id = ?", [id])
    .then(([friends]) => friends);
};

module.exports = { findAll, findOne };
