const mongoose = require('mongoose');
const productoSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: [String], required: true }
});
module.exports = mongoose.model('Producto', productoSchema);