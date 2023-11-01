const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const { User } = require("../models/user");

function validateToken(req, res, next) {
  try {
    const { token } = req.headers;

    if (!token) {
      return res
        .status(401)
        .send({ output: "Access denied, login to proceed" });
    }

    jwt.verify(token, JWT_SECRET, async (err, tokenBody) => {
      if (err) {
        return res.status(400).send({ output: "Invalid token" });
      }
      const user = await User.findOne({
        _id: tokenBody.userId,
        email: tokenBody.email,
      });
      if (!user) {
        return res
          .status(401)
          .send({ message: "Access denied, invalid token" });
      }
      req.content = {
        userId: tokenBody.userId,
        email: tokenBody.email,
      };
      next();
    });
  } catch (error) {
    res.status(500).send({ message: "Unknown error", error });
  }
}

module.exports = { validateToken };
