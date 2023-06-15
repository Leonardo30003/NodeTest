var Personas = require('../models/personas');
    express = require('express');
    router = express.Router();

router.post('crearPersonas',async (require, response) => {
    var body = request.body;
    await Personas.insertMany({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        estadoCivil:body.estado,
        descripcion: body.descripcion,
        telefono:body.telefono



    },(err,resp)=>{
        if(err){
            console.log(err);
            throw err;
            respuesta.status(500).json('Ocurrio un error al crear'+err)
        }
        respuesta.status(200).json(resp);
    });

});
module.exports=router;