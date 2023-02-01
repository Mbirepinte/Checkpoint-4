const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM comment")
    .then(([comments]) => comments);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM comment where id = ?", [id])
    .then(([comment]) => comment);
};

module.exports = { findAll, findOne };
