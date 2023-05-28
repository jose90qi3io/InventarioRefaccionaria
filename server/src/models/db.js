const mongoose = require('mongoose');

const bdConeccion = () => {
try{
    mongoose
    .connect(process.env.MONGODB_URI)
    console.log( "Coneccion con MongoDB Atlas: CORRECTA!!")
} catch(error) {
    console.error(error)
};


}

module.exports = {
    bdConeccion
}

