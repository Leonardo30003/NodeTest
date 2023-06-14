var mongoose = require('mongoose')
schema=mongoose.Schema;

var preferenciasSchema=new mongoose.schema({
    hobby:String,
    generoPreferido:String,
    edadMinima:Number,
    edadMaxima:Number,
    ciudades:String,
    busco:String
})
var preferencias=mongoose.model('preferencias',preferenciasSchema);
module.exports=preferencias;