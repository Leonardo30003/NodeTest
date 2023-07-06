var preferencias = require("../models/preferencias");
express = require("express");
router = express.Router();

router.post('/crearPreferencia', (req, response) => {
  var body = req.body;
  console.log(body);
  preferencias.insertMany({
    hobbie: body.hobbie,
    generoPreferido: body.generoPreferido,
    edadminima: body.edadminima,
    edadmaxima: body.edadmaxima,
    ciudades: body.ciudades,
    busco: body.busco
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });;

});
module.exports = router;
router.post('/editarPreferencia', (req, response) => {
  var body = req.body;
  preferencias.updateOne({
    _id: body.id //que campo voy actualizar
  }, {
    $set: {
      hobbie: body.hobbie,
      generoPreferido: body.generoPreferido,
      edadminima: body.edadminima,
      edadmaxima: body.edadmaxima,
      ciudades: body.ciudades,
      busco: body.busco
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });
  ;
});
module.exports = router;
router.post('/editarPreferencia', (req, response) => {
  var body = req.body;
  preferencias.deleteOne({
    _id: body.id //que campo voy actualizar
  }, {
    $set: {
      hobbie: body.hobbie,
      generoPreferido: body.generoPreferido,
      edadminima: body.edadminima,
      edadmaxima: body.edadmaxima,
      ciudades: body.ciudades,
      busco: body.busco
    }
  }).then(function () {
    console.log("Successfully saved defult items to DB");
    response.status(200).json("Datos Guardados");
  })
    .catch(function (err) {
      console.log(err);
      response.status(500).json("Ocurrio un error al guardar")
    });
  ;
});
module.exports = router;
