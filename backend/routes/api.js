const express = require("express");
const router = express.Router();
const yodel = require("../models/schema");
// Define interest rates
let interestBandA = 0.01; // 0 - 1000
let interestBandB = 0.02; // 1000 - 5000
let interestBandC = 0.03; // 5000 +

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
  let interestA = 0;
  let interestB = 0;
  let interestC = 0;

  if (request.body.interestBandA)
    interestBandA = request.body.interestBandA / 100;

  if (request.body.interestBandB)
    interestBandB = request.body.interestBandB / 100;

  if (request.body.interestBandC)
    interestBandC = request.body.interestBandC / 100;

  if (request.body.transaction > 0) {
    interestA = request.body.transaction * interestBandA;
  }

  if (request.body.transaction > 1000) {
    interestA = 1000 * interestBandA;
    interestB = (request.body.transaction - 1000) * interestBandB;
  }

  if (request.body.transaction > 5000) {
    interestB = 4000 * interestBandB;
    interestC = (request.body.transaction - 5000) * interestBandC;
  }

  const transaction = new yodel({
    transaction: request.body.transaction,
    interest: interestA + interestB + interestC,
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
