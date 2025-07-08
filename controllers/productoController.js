const Producto = require('../models/producto');

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({ message: 'Producto creado', producto: nuevoProducto });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el producto' });
  }
};

exports.buscarProductos = async (req, res) => {
  try {
    const termino = req.query.q;
    const productos = await Producto.find({ nombre: { $regex: termino, $options: 'i' } });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error en la búsqueda' });
  }
};