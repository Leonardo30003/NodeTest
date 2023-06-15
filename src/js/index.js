const express= require("express");
const app= express();
const bodyParser=require("body-parser");
const conexion=require('./config/conexion')
const ruta=require('./routers/router');
const { response } = require("express");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//ruteo
app.use(ruta);
app.use('/',ruta);
app.get('/hola',(Request,response)=>{
  var datos=Request.query;

  response.json({message:'hola: '+datos.nombre});
})
app.listen(3000,()=>{
  console.log("Servidor iniciado")
});