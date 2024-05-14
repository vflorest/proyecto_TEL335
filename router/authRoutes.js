const express = require('express');
const router = express.Router();

// Endpoint para registro
router.post('/register', (req, res) => {
    res.send('Respuesta desde register');
});

// Endpoint para acceso de administrador
router.post('/adminAccess', (req, res) => {
    res.send('Respuesta desde adminAccess');
});

// Endpoint para inicio de sesión
router.post('/login', (req, res) => {
    res.send('Respuesta desde login');
});

// Endpoint para recuperar contraseña
router.post('/forgotPassword', (req, res) => {
    res.send('Respuesta desde forgotPassword');
});

module.exports = router;
