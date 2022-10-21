const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
  });

  // mongodb connection
mongoose
.connect("mongodb+srv://tone:Tonestone87@cluster0.fu3seis.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) => console.error(error));


// server listening
app.listen(port, () => console.log("Servidor en el puerto", port));

