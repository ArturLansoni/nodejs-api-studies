const express = require("express");
const { validateToken } = require("../middleware/verifyToken");
const router = express.Router();
const { BankAccount } = require("../models/bankAccount");
const { Client } = require("../models/client");

router.get(
  "/bank-account",
  validateToken.bind(validateToken),
  async (_, res) => {
    try {
      const bankAccount = await BankAccount.find().select(" -__v");
      res.status(200).send({ message: "Success", bankAccount });
    } catch (error) {
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.get(
  "/bank-account/:clientId",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      const bankAccount = await BankAccount.findOne({
        clientId: req.params.clientId,
      }).select(" -__v");
      res.status(200).send({ message: "Success", bankAccount });
    } catch (error) {
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.post(
  "/bank-account",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      const client = await Client.findOne({
        _id: req.body.clientId,
      });
      if (!client) {
        return res.status(404).send({ message: "Client not Found" });
      }

      const result = await BankAccount.create(req.body);
      res.status(201).send({ message: "Created", result });
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send({ message: "Bank account already exists" });
      }
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.put(
  "/bank-account/:id",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      const result = await BankAccount.findByIdAndUpdate(req.params.id, {
        bank: req.body.bank,
        type: req.body.type,
        limit: req.body.limit,
      });
      if (!result) {
        res.status(400).send({ message: "Bank account not Found" });
      } else {
        res.status(204).send({ message: "Updated client" });
      }
    } catch (error) {
      res.status(500).send({ message: "Unknown error", error });
    }
  }
);

router.delete(
  "/bank-account/:id",
  validateToken.bind(validateToken),
  async (req, res) => {
    try {
      await BankAccount.findByIdAndDelete(req.params.id);
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
