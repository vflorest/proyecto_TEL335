const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const clientes = require('./modulos/clientes/rutas')
const usuarios = require('./modulos/usuarios/rutas')
const auth = require('./modulos/auth/rutas')

const error = require('./red/errors');
const morgan = require('morgan');

//Middleware
app.use(cors());
app.use(morgan('dev'));
// app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

//config
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use('/api/auth', auth)
app.use(error)

module.exports = app;