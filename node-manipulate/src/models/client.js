const mongoose = require("../database/connection");

const schema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  cpf: { type: String, unique: true, require: true },
  phone: { type: String },
  age: { type: Number, require: true },
  username: { type: String, unique: true, require: true },
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.model("client", schema);

module.exports = { Client };
