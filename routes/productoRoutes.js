const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Aquí agregaremos las rutas una por una
module.exports = router;
router.get('/', productoController.obtenerProductos);
router.post('/', productoController.crearProducto);
router.get('/buscar', productoController.buscarProductos);
router.get('/:codigo', productoController.obtenerProductoPorCodigo);
router.put('/:codigo', productoController.actualizarProducto);
router.delete('/:codigo', productoController.eliminarProducto);