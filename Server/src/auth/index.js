const jwt = require('jsonwebtoken');
config = require('../config');

const secret = config.jwt.secret;

function asignarToken(data){
    return jwt.sign(data, secret);
}

function verificarToken(token){
    return jwt.verify(token, secret);
}

const checkToken = {
    confirmarToken: function(req){
        const decodificado = decodeHeader(req);
        
        // if(decodificado.id !== id){
        //     throw new Error('No puedes acceder a este recurso');
        // }
    }
}

function obtenerToken(authorization){
    if(!authorization){
        throw new Error('No hay token en la cabecera');
    }

    if(authorization.indexOf('Bearer') === -1){
        throw new Error('Token no válido');
    }

    let token = authorization.replace('Bearer', '');
    return token;
}

function decodeHeader(req){
    console.log(req.headers);
    const authorization = req.headers.authorization || '';
    const token = obtenerToken(authorization);
    const decodificado = verificarToken(token);

    req.user =  decodificado;

    return decodificado;
}



module.exports = {
    asignarToken,
    checkToken,
}