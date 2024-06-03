const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../middleware/errors');

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const chequearToken = {
    confirmarToken: function(req, id){
        const decodificado = decodificarCabecera(req);
        
        if(decodificado.id !== id){
            throw error('No tienes privilegios para acceder a este recurso', 401);
        }
    }
}

function obtenerToken(authorization){
    if(!authorization){
        throw error('No hay token en la cabecera', 401);
    }

    if(authorization.indexOf('Bearer') === -1){
        throw error('Token no válido', 401);
    }

    let token = authorization.replace('Bearer ', '');
    return token;
}

function decodificarCabecera(req){
    const authorization = req.headers.authorization || '';
    const token = obtenerToken(authorization);
    const decodificado = verificarToken(token);

    req.user =  decodificado;

    return decodificado;
}



module.exports = {
    asignarToken,
    chequearToken,
}