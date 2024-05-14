const express = require('express');
const router = express.Router();

// Endpoint para ir a la vista para ingresar un objeto perdido
router.get('/send-new-request', (req, res) => {
  // Lógica para ingresar un objeto perdido
    res.send('Respuesta desde requests/send-new-request');
});


module.exports = router;
