const express = require('express');
const router = express.Router();

// Endpoint para ingresar un objeto perdido
router.post('/lost-items', (req, res) => {
  // Lógica para ingresar un objeto perdido
});

// Endpoint para ver la lista de objetos perdidos
router.get('/lost-items', (req, res) => {
  // Lógica para obtener y mostrar la lista de objetos perdidos
});

// Endpoint para ver la lista de solicitudes de usuarios
router.get('/requests', (req, res) => {
  // Lógica para obtener y mostrar la lista de solicitudes de usuarios
});

module.exports = router;
