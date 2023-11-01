require("dotenv").config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI || "",
  JWT_SECRET: process.env.JWT_SECRET || "",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "2d",
  HOST_NAME: process.env.HOST_NAME || "",
  PORT: process.env.PORT || 3000,
};
