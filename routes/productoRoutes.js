const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// --- Rutas de Creación y Lectura General ---
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);

// --- Rutas Específicas (¡IMPORTANTE: van ANTES que las dinámicas!) ---
router.get('/buscar', productoController.buscarProductos);
router.get('/categoria/:nombre', productoController.obtenerProductosPorCategoria);
router.get('/precio/:min-:max', productoController.obtenerProductosPorRangoDePrecio);

// --- Rutas Dinámicas por Código (van DESPUÉS de las específicas) ---
router.get('/:codigo', productoController.obtenerProductoPorCodigo);
router.put('/:codigo', productoController.actualizarProducto);
router.delete('/:codigo', productoController.eliminarProducto);

// --- Ruta de Carga Masiva ---
router.post('/masivo', productoController.crearProductosEnMasa);

module.exports = router;