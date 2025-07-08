const fs = require('fs');
const path = require('path');
const connectDB = require('./config/database');
const Producto = require('./models/producto');

connectDB();

// IMPORTANTE: Cambia 'electronica.json' por tu archivo
const filePath = path.join(__dirname, 'data', 'electronica.json');
const productos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const importarDatos = async () => {
  try {
    await Producto.deleteMany();
    await Producto.insertMany(productos);
    console.log('¡Datos importados correctamente!');
    process.exit();
  } catch (error) {
    console.error('Error al importar datos:', error);
    process.exit(1);
  }
};
importarDatos();