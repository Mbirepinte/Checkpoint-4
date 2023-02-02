const argon2 = require("argon2");
const { validationResult } = require("express-validator");
const userModel = require("../models/userModel");
const { jwtSign } = require("../helpers/jwt");

const userController = {
  getAllusers: (req, res, next) => {
    userModel
      .findAll()
      .then((users) => res.status(200).send(users))
      .catch((err) => next(err));
  },
  getuserById: (req, res, next) => {
    const { id } = req.params;
    userModel
      .findOne(id)
      .then(([user]) => res.status(200).send(user))
      .catch((err) => next(err));
  },
  login: (req, res, next) => {
    const { email, password } = req.body;
    userModel
      .findByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ message: "Invalid email or password" });
        } else {
          const {
            userId,
            role,
            email: userEmail,
            firstname,
            password: hashedPassword,
          } = user;

          if (await argon2.verify(hashedPassword, password)) {
            const token = jwtSign(
              { userId, userEmail, firstname, role },
              { expiresIn: "1h" }
            );
            res
              .cookie("acces_token", token, { httpOnly: true, secure: true })
              .status(200)
              .send({
                message: "User logged in successfully",
                userId,
                email,
                firstname,
                role,
              });
          } else {
            res.status(404).send({ message: "Invalid email or password" });
          }
        }
      })
      .catch((err) => next(err));
  },
  updateUser: (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    userModel
      .update(user, id)
      .then(() => res.status(200).send({ message: "user updated" }))
      .catch((err) => next(err));
  },

  createUser: async (req, res, next) => {
    const errors = validationResult(req);
    const { firstname, lastname, adress, birthday, job, email, password } =
      req.body;
    const hashedPassword = await argon2.hash(password);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      userModel
        .createOne({
          firstname,
          lastname,
          adress,
          birthday,
          job,
          email,
          password: hashedPassword,
        })
        .then(([response]) => {
          console.warn(response);
          return res.status(201).send({
            message: "User created successfully",
            email,
            firstname,
            lastname,
          });
        });
    } catch (err) {
      return next(err);
    }
    return res.status(201).send({ message: "User created successfully" });
  },
};

module.exports = userController;
