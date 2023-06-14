var mongoose = require('mongoose')

schema=mongoose.Schema;

var personasSchema=new mongoose.schema({
    nombres:String,
    apellidos:String,
    edad:Number,
    genero:String,
    estadoCivil:String,
    descripcion:String,
    telefono:String
})
var persona=mongoose.model('persona',personasSchema);
module.exports=persona;