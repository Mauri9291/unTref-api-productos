const express = require('express');
const connectDB = require('./config/database');
const productoRoutes = require('./routes/productoRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use('/productos', productoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));