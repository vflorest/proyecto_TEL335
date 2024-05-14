const express = require('express');
const router = express.Router();

// Endpoint para ir a la vista para ingresar una nueva solicitud
router.get('/new-request', (req, res) => {
  // Lógica para ingresar una solicitud
    res.send('Respuesta desde user/new-request');
});

// Endpoint para ver la info del usuario
router.get('/get-info', (req, res) => {
    // Lógica para obtener y mostrar la info
    res.send('Respuesta desde user/get-info');
});

// Endpoint para ver la lista de las solicitudes del usuario
router.get('/prev-requests', (req, res) => {
    // Lógica para obtener y mostrar las solicitudes previas
    res.send('Respuesta desde user/prev-requests');
});

module.exports = router;
