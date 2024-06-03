const TABLA = 'auth';
const bcrypt = require('bcrypt');
const auth = require('../../auth');

module.exports = function(dbinyectada){

    let db = dbinyectada;

    if(!db){
        db = require('../../DB/mysql');
    }

    async function login(email, password){

        const data = await db.query(TABLA, {email: email});

        return bcrypt.compare(password, data.password)
            .then(resultado =>{
                if(resultado === true){
                    return auth.asignarToken({...data});
                }else{
                    throw new Error('Información inválida');
                }
        });
    }

    async function agregar(data){
        const authData = {
            id: data.id
        }
        

        if(data.email){
            authData.email = data.email;
        }

        if(data.password){
            authData.password =  await bcrypt.hash(data.password.toString(), 5);
        }

        return db.agregar(TABLA, authData);
    }

    
    return {
        agregar,
        login
    }
}