const mongoose = require('mongoose')
const CarSchema = new mongoose.Schema({
    marca: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 100,
    },
    placa: {
        type: String,
        require: true,
        minlenght: 6,
        maxlenght: 7,
    },
    renavan: {
        type: String,
        require: true,
        minlenght: 14,
        maxlenght: 17,
    },
    cor: {
        type: String,
        require: true,
        minlenght: 3,
        maxlenght: 30,
    },
    registro: {
        type: Date,
        default: Date.now
    }

});


mongoose.model('Car', CarSchema);