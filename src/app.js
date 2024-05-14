
const express = require('express');
const app = express();
const mainRoutes = require('../router/index');
const authRoutes = require('../router/authRoutes');
const adminRoutes = require('../router/adminRoutes');

const port = 3000;

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);


app.listen(port, function () {
  console.log(`Servidor corriendo en el puerto ${port}`);
})