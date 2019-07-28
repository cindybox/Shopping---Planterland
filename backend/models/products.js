const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pid: {
    type: Number,
    required: true,
    unique: true
  },
  title: String,
  company: String,
  link: String,
  price: String,
  image: String,
  specs: Array,
  description: String,
  material: String,
  projectimage: Array
});

module.exports = mongoose.model("Product", productSchema);
