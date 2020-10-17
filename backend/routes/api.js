const express = require("express");
const router = express.Router();
const yodel = require("../models/schema");
// CRUD = Create Retrieve Update Delete

// retrieve all
router.get("/", async (request, response) => {
  try {
    const transactions = await yodel.find();
    response.send(transactions);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

// retrive one
router.get("/:id", getTransaction, (request, response) => {
  response.send(response.transaction);
});

// create
router.post("/", async (request, response) => {
  const transaction = new yodel({
    transaction: request.body.transaction,
  });
  try {
    const newTransaction = await transaction.save();
    response.status(201).json(newTransaction);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
});

// update
router.patch("/:id", getTransaction, async (request, response) => {
  if (request.body.transaction != null) {
    response.transaction.transaction = request.body.transaction;
  }

  try {
    const updatedTransaction = await response.transaction.save();
    response.status(201).json(updatedTransaction);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
});

// delete
router.delete("/:id", getTransaction, async (request, response) => {
  try {
    await response.transaction.remove();
    response.json({ message: "transaction deleted" });
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

// Middleware
async function getTransaction(request, response, next) {
  let transaction;
  try {
    transaction = await yodel.findById(request.params.id);
    if (transaction == null) {
      return response.status(404).json({ message: "transaction not found" });
    }
  } catch (err) {
    return response.status(500).json({ message: err.message });
  }

  response.transaction = transaction;
  next();
}

module.exports = router;
