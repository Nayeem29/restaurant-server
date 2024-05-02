const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    recipe: {
      type: String,
      required: true,
      unique: false,
    },
    price: {
      type: Number,
      required: true,
      unique: false,
    },
    category: {
      type: String,
      required: true,
      unique: false,
    },
    image: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema, "menu");

module.exports = Menu;
