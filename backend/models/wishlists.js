const mongoose = require("mongoose");

// const passportLocalMongoose = require("passport-local-mongoose");

const wishlistSchema = new mongoose.Schema({
  id: Number,
  listname: String,
  products: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      pid: Number,
      title: String,
      company: String,
      link: String,
      price: String,
      image: String,
      specs: Array,
      description: String
    }
  ]
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
