const express = require('express');


const routes = express.Router();


const estadoController = require('../controllers/estado-controller');


routes.route('/')
    .get(estadoController.index)      
    .post(estadoController.create);    


routes.route('/:id')
    .get(estadoController.show)        
    .put(estadoController.update)      
    .delete(estadoController.delete);   

module.exports = routes;