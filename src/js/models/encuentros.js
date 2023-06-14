var mongoose = require('mongoose')
schema=mongoose.Schema;

var encuentrosSchema=new mongoose.schema({
    perosonaA:Object,
    perosonaB:Object,
    lugar:String,
    latitud:Number,
    longitud:Number
})
var encuentros=mongoose.model('encuentros',encuentrosSchema);
module.exports=encuentros;