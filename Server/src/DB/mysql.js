const mysql = require('mysql')
const config = require('../config')

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password:  config.mysql.password,
    database: config.mysql.database
}
let conexion;
function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) =>{
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }else{
            console.log('DB conectada!');
        }
    })
    conexion.on('error', (err) => {
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    })
}
conMysql()

function todos(tabla){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (err, rows) => {
            return err ? reject(err) : resolve(rows);
        })
    })
}

function uno(tabla, id){
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id = ${id}`, (err, rows) => {
            return err ? reject(err) : resolve(rows);
        })
    })
}

function agregar(tabla, data){
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO ${tabla} SET ? ON DUPLICATE KEY UPDATE ?`, [data,data], (err, rows) => {
            return err? reject(err) : resolve(rows);
        })
    })
}

function actualizar(tabla, data){
    return new Promise((resolve, reject) =>{
        conexion.query(`UPDATE ${tabla} SET? WHERE id = ?`, [data, data.id], (err, rows) => {
            return err? reject(err) : resolve(rows);
        })
    })
}


function eliminar(tabla, data){
    return new Promise((resolve, reject) =>{
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (err, rows) => {
            return err ? reject(err) : resolve(rows);
        })
    })
}

function query(tabla, consulta){
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${tabla} WHERE ?`, consulta, (err, rows) => {
            return err? reject(err) : resolve(rows[0]);
        })
    })

}

module.exports = {
    todos,
    uno,
    agregar,
    actualizar,
    eliminar,
    query
}