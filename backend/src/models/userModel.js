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

const update = (user, id) => {
  return db
    .promise()
    .query("UPDATE user SET ? WHERE userId = ?", [user, id])
    .then(([res]) => res);
};

module.exports = { findAll, findOne, findByEmail, update };
