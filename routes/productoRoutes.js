const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// CRUD Básico
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.get('/:codigo', productoController.obtenerProductoPorCodigo);
router.put('/:codigo', productoController.actualizarProducto);
router.delete('/:codigo', productoController.eliminarProducto);

// Endpoints Adicionales
router.get('/buscar', productoController.buscarProductos);
router.get('/categoria/:nombre', productoController.obtenerProductosPorCategoria);
router.get('/precio/:min-:max', productoController.obtenerProductosPorRangoDePrecio);
router.post('/masivo', productoController.crearProductosEnMasa);

module.exports = router;
