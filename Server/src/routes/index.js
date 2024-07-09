const express = require('express');
const router = express.Router();
const objectRoutes = require('./object/object');
const requestRoutes = require('./request/request')

router.use('/objects', objectRoutes);
router.use('/requests', requestRoutes);

module.exports = router;
