const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// Rutas
app.use("api/auth", authRoutes);

//Conexion a MongoDB

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })

  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error de Conexion", err));
app.listen(PORT, () => console.log(`Servidor de puerto ${PORT}`));

// habilitar puerto 5000 en Mac ??
