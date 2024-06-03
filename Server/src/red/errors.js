const respuesta = require('./respuestas');

function errors(err, req, res, next){
    console.error('[error]', err);

    const messaage = err.message || 'Error interno';
    const statusCode  = err.statusCode || 500;

    respuesta.error(req, res, messaage, statusCode);
}

module.exports = errors;