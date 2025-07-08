const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// --- CRUD Básico ---
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);

// --- Endpoints Adicionales (Específicos) ---
// NOTA: Las rutas específicas deben ir ANTES que las dinámicas.
router.get('/buscar', productoController.buscarProductos);
router.get('/categoria/:nombre', productoController.obtenerProductosPorCategoria);
router.get('/precio/:min-:max', productoController.obtenerProductosPorRangoDePrecio);

// --- Rutas Dinámicas (van al final de las GET) ---
router.get('/:codigo', productoController.obtenerProductoPorCodigo);
router.put('/:codigo', productoController.actualizarProducto);
router.delete('/:codigo', productoController.eliminarProducto);

// --- Carga Masiva ---
router.post('/masivo', productoController.crearProductosEnMasa);

module.exports = router;