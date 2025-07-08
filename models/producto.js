const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: [String], required: true }
});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;