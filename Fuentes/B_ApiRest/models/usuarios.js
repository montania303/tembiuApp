'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsuariosSchema = new Schema({
    usuario: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Usuarios', UsuariosSchema);