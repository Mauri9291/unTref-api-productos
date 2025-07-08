const express = require('express');
const connectDB = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json()); // Para entender los JSON que nos envían

// Rutas
app.use('/productos', productoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));