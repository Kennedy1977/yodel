const mongoose = require("mongoose");

const ApiSchema = new mongoose.Schema({
  interestRates: {
    type: Number,
    required: false,
  },
  transaction: {
    type: Number,
    required: true,
  },
  transactionDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("yodel", ApiSchema);
