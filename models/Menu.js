const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false
    },
    recipe: {
      type: String,
      required: true,
      unique: false
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      unique: false
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
