const express = require("express");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/createToken");
const { validateToken } = require("../middleware/verifyToken");
const router = express.Router();
const { User } = require("../models/user");
const { Log } = require("../models/log");
const config = require("../config/settings");

router.post("/user", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      config.bcrypt_salt
    );
    const result = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).send({ message: "Created", result });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ message: "User already exists" });
    }
    res.status(500).send({ message: "Unknown error", error });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not Found" });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const token = createToken(user._id, user.email);
    await Log.create({ userId: user._id, token });

    res.status(200).send({ message: "Authenticated user", token });
  } catch (error) {
    res.status(500).send({ message: "Unknown error", error });
  }
});

router.put(
  "/user/password/:id",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(
        req.body.password,
        config.bcrypt_salt
      );

      const result = await User.findByIdAndUpdate(req.params.id, {
        password: hashedPassword,
      });
      if (!result) {
        res.status(400).send({ message: "User not Found" });
      } else {
        res.status(204).send({ message: "Updated password" });
      }
    } catch (error) {
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.use((_, res) => {
  res.type("application/json");
  res.status(404).send({ message: "Not Found" });
});

module.exports = router;
