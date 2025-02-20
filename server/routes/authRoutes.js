const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

// Registro

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body; // envia la informacion
    // una opcion para encriptar la contraseña

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, password: hashedPassword }); // base de datos encriptada
    await newUser.save(); // salvar usuario
    res.json({ message: "Usuario creado correctamente" });
  } catch (error) {
    // captar errores
    res.status(500).json({ error: error.message });
  }
});

// Inicio de sesion

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }); //busca en la base de datos si el usuario existe
    if (!user) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }
    // desencriptar password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }
    // Crear token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
