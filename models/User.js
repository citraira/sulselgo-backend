const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  telepon: String,

  password: {
    type: String,
    required: true
  },

  fotoProfil: {
    type: String,
    default: ""
  },

  tanggalLahir: String,
  alamat: String,

  resetCode: String,
  resetCodeExpire: Date
});

module.exports =
  mongoose.model("User", UserSchema);