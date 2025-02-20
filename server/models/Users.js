// establecer esquema de usuarios
const mongoose = require("mongoose");

// crear una instancia
const userSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

//modularizar
// exportar modelo

module.exports = mongoose.model("User", userSchema);
