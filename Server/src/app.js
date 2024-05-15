
const express = require('express');
const app = express();
const mainRoutes = require('../router/index');
const authRoutes = require('../router/authRoutes');
const lostItemRoutes = require('../router/lostItemRoutes');
const userRoutes = require('../router/userRoutes');
const requestRoutes = require('../router/requestsRoutes')

const port = 3000;

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/add-lost-item', lostItemRoutes);
app.use('/user', userRoutes);
app.use('/requests', requestRoutes);



app.listen(port, function () {
  console.log(`Servidor corriendo en el puerto ${port}`);
})