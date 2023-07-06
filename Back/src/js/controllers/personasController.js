var Personas=require("../models/personas");
    express=require("express");
    router=express.Router();

router.post('/crearPersona',(req,response)=>{
    var body=req.body;
    console.log(body);
     Personas.insertMany({
        nombres:body.nombres,
        apellidos:body.apellidos,
        edad:body.edad,
        genero:body.genero,
        estadoCivil:body.estado,
        descripcion:body.descripcion,
        telefono:body.tel
    }).then(function () {
        console.log("Successfully saved defult items to DB");
        response.status(200).json("Datos Guardados");
      })
      .catch(function (err) {
        console.log(err);
        response.status(500).json("Ocurrio un error al guardar")
      });

});
module.exports=router;
router.post('/editarPersona', (req, response) => {
  var body = req.body;
  Personas.updateOne({
    _id:body.id //que campo voy actualizar
  }, {
    $set: {
      nombres: body.nombres,
      apellidos: body.apellidos,
      edad: body.edad,
      genero: body.genero,
      estadoCivil: body.estadoCivil,
      descripcion: body.descripcion,
      telefono: body.telefono
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });
});
module.exports = router;
router.post('/editarPersona', (req, response) => {
  var body = req.body;
  Personas.updateOne({
    _id:body.id //que campo voy actualizar
  }, {
    $set: {
      nombres: body.nombres,
      apellidos: body.apellidos,
      edad: body.edad,
      genero: body.genero,
      estadoCivil: body.estadoCivil,
      descripcion: body.descripcion,
      telefono: body.telefono
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });
});
module.exports = router;
router.post('/eliminarPersona', (req, response) => {
  var body = req.body;
  Personas.deleteOne({
    _id:body.id //que campo voy actualizar
  }, {
    $set: {
      nombres: body.nombres,
      apellidos: body.apellidos,
      edad: body.edad,
      genero: body.genero,
      estadoCivil: body.estadoCivil,
      descripcion: body.descripcion,
      telefono: body.telefono
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });
;});
module.exports = router;