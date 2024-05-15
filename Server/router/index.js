const express = require('express');
const router = express.Router();

// Definir rutas
router.get('/', (req, res) => {
  res.send('¡Hola desde la página principal!');
});

router.get('/test', (req, res) => {
  res.send('¡Hola desde la ruta test!');
});

// Exportar el enrutador
module.exports = router;