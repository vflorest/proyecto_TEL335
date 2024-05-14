
const express = require('express');
const app = express();
const mainRoutes = require('../router/index');
const authRoutes = require('../router/authRoutes');
const adminRoutes = require('../router/adminRoutes');
const lostItemRoutes = require('../router/lostItemRoutes');
const userRoutes = require('../router/userRoutes');

const port = 3000;

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/add-lost-item', lostItemRoutes);
app.use('/user', userRoutes);



app.listen(port, function () {
  console.log(`Servidor corriendo en el puerto ${port}`);
})