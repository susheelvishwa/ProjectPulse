const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  type: { type: String, required: true }, 
  category: { type: String }, 
  value: { type: Number }, 
});

module.exports = mongoose.model("Discount", discountSchema);
