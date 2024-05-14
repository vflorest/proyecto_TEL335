const express = require('express');
const router = express.Router();

const lostItems = [];
const requests = [];

// Endpoint para ir a la vista para ingresar un objeto perdido
router.get('/add-lost-item', (req, res) => {
  // Lógica para ingresar un objeto perdido
    res.send('Respuesta desde admin/add-lost-item');
});

// Endpoint para ver la lista de objetos perdidos
router.get('/lost-items', (req, res) => {
    // Lógica para obtener y mostrar la lista de objetos perdidos
    res.send('Respuesta desde admin/lost-items');
});

// Endpoint para ver la lista de solicitudes de usuarios
router.get('/requests', (req, res) => {
    // Lógica para obtener y mostrar la lista de solicitudes de usuarios
    res.send('Respuesta desde admin/requests');
});

module.exports = router;
