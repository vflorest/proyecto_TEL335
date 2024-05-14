const express = require('express');
const router = express.Router();

// Endpoint para ir a la vista para ingresar un objeto perdido
router.get('/new-request', (req, res) => {
  // Lógica para ingresar un objeto perdido
    res.send('Respuesta desde user/new-request');
});

// Endpoint para ver la lista de objetos perdidos
router.get('/get-info', (req, res) => {
    // Lógica para obtener y mostrar la lista de objetos perdidos
    res.send('Respuesta desde user/get-info');
});

// Endpoint para ver la lista de solicitudes de usuarios
router.get('/prev-requests', (req, res) => {
    // Lógica para obtener y mostrar la lista de solicitudes de usuarios
    res.send('Respuesta desde user/prev-requests');
});

module.exports = router;
