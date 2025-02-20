require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("¡Conectado!"))
  .catch((err) => console.error("Error de conexión:", err));
