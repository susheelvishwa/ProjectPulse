const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  total: { type: Number, default: 0 },
});

module.exports = mongoose.model("Cart", cartSchema);
