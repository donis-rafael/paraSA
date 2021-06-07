const mongoose = require('mongoose');

const user_Schema = new mongoose.Schema({
    usuario: {
        type: String,
        required: [true, 'El usuario es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    tipo: {
        type: Number
    }
}, { collection: 'Usuario' });

module.exports = mongoose.model("Usuario", user_Schema);