const mongoose = require('mongoose');

//Esquema de MongoDB Refacciones
const refaccionesShema = mongoose.Schema({ 

descripcion: {
    type:String,
    required:true,
    minlength: 3,
    maxlength: 20,
},
numParte: {
    type:Number,
    required: true,
},
precio: {
    type:Number,
    required: true,
},
cantidad: {
    type:Number,
    required: true,
}
})

module.exports = mongoose.model('pieza',refaccionesShema)
