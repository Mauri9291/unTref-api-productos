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

exports.obtenerProductoPorCodigo = async (req, res) => {
  try {
    const producto = await Producto.findOne({ codigo: req.params.codigo });
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findOneAndUpdate({ codigo: req.params.codigo }, req.body, { new: true });
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto actualizado', producto });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar' });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findOneAndDelete({ codigo: req.params.codigo });
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar' });
  }
};