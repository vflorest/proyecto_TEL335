const mysql = require('mysql')
const config = require('../config')

const prueba = {
    id: 1,
    nombre: 'juan',
    edad: 43
}

function todos(tabla){
    return prueba;
}

function uno(tabla, id){
    
}

function agregar(tabla, data){

}

function eliminar(tabla, id){

}


module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}