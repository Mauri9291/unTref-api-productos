const Producto = require('../models/producto');

// GET /productos - Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

// GET /productos/:codigo - Obtener un producto por su código
exports.obtenerProductoPorCodigo = async (req, res) => {
  try {
    const producto = await Producto.findOne({ codigo: req.params.codigo });
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto' });
  }
};

// POST /productos - Crear un nuevo producto
exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({ message: 'Producto creado exitosamente', producto: nuevoProducto });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el producto', error: error.message });
  }
};

// PUT /productos/:codigo - Actualizar un producto
exports.actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findOneAndUpdate(
      { codigo: req.params.codigo },
      req.body,
      { new: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto actualizado exitosamente', producto: productoActualizado });
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el producto', error: error.message });
  }
};

// DELETE /productos/:codigo - Eliminar un producto
exports.eliminarProducto = async (req, res) => {
  try {
    const productoEliminado = await Producto.findOneAndDelete({ codigo: req.params.codigo });
    if (!productoEliminado) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto' });
  }
};

// GET /productos/buscar?q=... - Buscar productos por nombre
exports.buscarProductos = async (req, res) => {
  try {
    const termino = req.query.q;
    if (!termino) {
      return res.status(400).json({ message: 'Debes proporcionar un término de búsqueda' });
    }
    const productos = await Producto.find({
      nombre: { $regex: termino, $options: 'i' }
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error en la búsqueda' });
  }
};

// GET /productos/categoria/:nombre - Filtrar por categoría
exports.obtenerProductosPorCategoria = async (req, res) => {
  try {
    const productos = await Producto.find({ categoria: req.params.nombre });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al filtrar por categoría' });
  }
};

// GET /productos/precio/:min-:max - Filtrar por rango de precio
exports.obtenerProductosPorRangoDePrecio = async (req, res) => {
  try {
    const min = parseFloat(req.params.min);
    const max = parseFloat(req.params.max);
    const productos = await Producto.find({
      precio: { $gte: min, $lte: max }
    });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al filtrar por precio' });
  }
};

// POST /productos/masivo - Carga masiva de productos
exports.crearProductosEnMasa = async (req, res) => {
  try {
    const productosCreados = await Producto.insertMany(req.body);
    res.status(201).json({ message: 'Productos creados masivamente', productos: productosCreados });
  } catch (error) {
    res.status(400).json({ message: 'Error en la inserción masiva', error: error.message });
  }
};