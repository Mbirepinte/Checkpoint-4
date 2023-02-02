const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM user")
    .then(([users]) => users);
};

const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * FROM user where userId = ?", [id])
    .then(([user]) => user);
};

const findByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM user where email = ?", [email])
    .then(([user]) => user);
};

module.exports = { findAll, findOne, findByEmail };
