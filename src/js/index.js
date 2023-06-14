const express= require("express");
const app= express();
const bodyParser=require("body-parser");
const conexion=require('./config/conexion')

app.use(bodyParser.json());

//ruteo
app.listen(3000,()=>{
  console.log("Servidor iniciado")
});