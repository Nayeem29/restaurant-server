const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
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
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      }
    },
    { timestamps: true }
  );

const User = mongoose.model('User', userSchema);

module.exports = User;