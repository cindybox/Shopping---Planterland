const mongoose = require("mongoose");

const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    admincode: String,
    cart: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        pid: Number,
        image: String,
        productName: String,
        selectedCount: Number,
        selectedTotal: Number,
        selectedPrice: Number,
        selectedSpecs: Object
      }
    ],
    wishlists: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Wishlist" },
        listname: String
      }
    ]
  },
  { timestamps: true }
);

//by using the plugin, is using passportLocalMongoose to authenticate user
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
