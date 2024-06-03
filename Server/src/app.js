// import mysql from 'mysql2';
const express = require('express');
const config = require('./config');
const app = express();

const clientes = require('./modulos/clientes/rutas')
const usuarios = require('./modulos/usuarios/rutas')
const error = require('./red/errors');
const morgan = require('morgan');

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//config
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes)
app.use('/api/usuarios', usuarios)
app.use(error)

module.exports = app;