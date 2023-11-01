const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  userId: { type: String, require: true },
  token: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

const Log = mongoose.model("logs", schema);

module.exports = { Log };
