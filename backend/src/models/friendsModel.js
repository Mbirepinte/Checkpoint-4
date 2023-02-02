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
const findAllMyFriends = (id) => {
  return db
    .promise()
    .query(
      "SELECT userId, email, firstname, avatar  FROM friends JOIN user ON user.userId = friends.user_Id where owner_id = ?",
      [id]
    )
    .then(([friends]) => friends);
};

module.exports = { findAll, findOne, findAllMyFriends };
