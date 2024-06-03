const express = require('express');

const respuesta = require('../../red/respuestas')
const controlador = require('./index');

const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/', eliminar); 

async function todos (req, res, next){
    try{
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
    }catch(err){
        next(err);
    }
}


 async function uno(req, res, next){
    try{
        const id = req.params.id;
        const uno = await controlador.uno(req.params.id);
        respuesta.success(req, res, uno, 200)
    }catch(err){
        next(err);
    }
}

async function agregar(req, res, next){
    try{
        const items = await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'Item agregado satisfactoriamente';
        }else{
            mensaje = 'Item actualizado satisfactoriamente';
        }
        respuesta.success(req, res, mensaje, 200);
    }catch(err){
        next(err);
    }

}


async function eliminar(req, res, next){
    try{
        const respuesta = await controlador.eliminar(req.body);
        respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
    }catch(err){
        next(err);
    }
}




module.exports = router;