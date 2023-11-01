const express = require("express");
const { validateToken } = require("../middleware/verifyToken");
const router = express.Router();
const { Client } = require("../models/client");

router.get("/client", validateToken.bind(validateToken), async (_, res) => {
  try {
    const client = await Client.find().select("-password -__v");
    res.status(200).send({ message: "Success", client });
  } catch (error) {
    res.status(500).send({ message: "Unknown error", error });
  }
});

router.post("/client", validateToken.bind(validateToken), async (req, res) => {
  try {
    const result = await Client.create(req.body);
    res.status(201).send({ message: "Created", result });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ message: "Client already exists" });
    }
    res.status(500).send({ message: "Unknown error", error });
  }
});

router.put(
  "/client/:id",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      const result = await Client.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          age: req.body.age,
          phone: req.body.phone,
        },
        {
          new: true,
        }
      );
      if (!result) {
        res.status(400).send({ message: "Client not Found" });
      } else {
        res.status(204).send({ message: "Updated client" });
      }
    } catch (error) {
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.delete(
  "/client/:id",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      await Client.findByIdAndDelete(req.params.id);
      res.status(204).send({ message: "Deleted" });
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
