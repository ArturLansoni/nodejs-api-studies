require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const router = require("./src/routes/routes");
const { PORT } = require("./src/config/env");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

app.use("/api/v1", router);

app.listen(PORT, (value) => console.log(`Server is running on Port: ${PORT}`));
