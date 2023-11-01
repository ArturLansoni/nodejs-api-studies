const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/env");

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((_) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.error(`Error to connect to MongoDB: ${error}`));

module.exports = mongoose;
