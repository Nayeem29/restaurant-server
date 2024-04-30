const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const cartSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: false
      },
      email: {
        type: String,
        required: true,
        unique: false
      },
      price:{
        type: Number,
        required: true,
      },
      menuId:{
        type: String,
        required: true,
        unique: false
      }
    },
    { timestamps: true }
  );

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;