const express = require('express');
const routes = require('./routes');
//importa o produto controller
const produtoController = require('../controllers/produto-controller');

//instancio um router para determinar as rotas
const routes = express.Router();

//rota principal
routes.get('/produtos',produtoController.index)

routes.get('/produtos/:id', produtoController.show)

routes.post('/produtos', produtoController.create)


module.exports = routes;