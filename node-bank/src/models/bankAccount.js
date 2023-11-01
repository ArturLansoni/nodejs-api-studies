const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  clientId: { type: String, require: true, unique: true },
  bank: { type: String, require: true },
  type: { type: String, require: true },
  username: { type: String, require: true, unique: true },
  limit: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
});

const BankAccount = mongoose.model("bankAccount", schema);

module.exports = { BankAccount };
