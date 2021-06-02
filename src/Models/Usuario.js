const { Schema, model } = require('mongoose');
 
const UsuarioSchema = new Schema({
 nome: {
   type: String,
   required: true,
 },
 idade: {
   type: Number,
   required: true,
 },
 bio: String,
 foto: {
   type: String,
   required: true,
 }
}, {
 timestamps: true,
});
 
module.exports = model('Usuarios', UsuarioSchema);