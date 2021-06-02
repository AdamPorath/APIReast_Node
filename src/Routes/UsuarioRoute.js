const UsuarioController = require('../Controllers/UsuarioController');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


module.exports = (app) => {
   app.post('/usuario', jsonParser, UsuarioController.post);
   app.put('/usuario/:id',jsonParser, UsuarioController.put);
   app.delete('/usuario/:id', UsuarioController.delete);
   app.get('/usuarios', UsuarioController.get);
   app.get('/usuario/:id', UsuarioController.getById);
}