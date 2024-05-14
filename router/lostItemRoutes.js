const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de ingreso de objeto perdido
router.get('/new', (req, res) => {
    // Renderizar el formulario de ingreso de objeto perdido
    res.send('Respuesta desde GET new lost item');
});

// Ruta para procesar el formulario de ingreso de objeto perdido
router.post('/new', (req, res) => {
    // Lógica para procesar la información del formulario y registrar el objeto perdido
    res.send('Respuesta desde POST new lost item');
});

module.exports = router;
