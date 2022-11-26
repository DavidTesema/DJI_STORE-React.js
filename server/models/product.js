const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
});

const model = mongoose.model("products", productSchema);

module.exports = model;
