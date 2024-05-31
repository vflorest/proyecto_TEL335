const db = require('../../DB/mysql')

const TABLA = 'clientes';


function todos(){
    return db.todos(TABLA)
}


module.exports = { 
    todos,
}