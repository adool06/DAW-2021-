const express = require('express');


const routes = express.Router();


const cidadeController = require('../controllers/cidade-controller');


routes.route('/')
    .get(cidadeController.index)       
    .post(cidadeController.create);    


routes.route('/:id')
    .get(cidadeController.show)        
    .put(cidadeController.update)      
    .delete(cidadeController.delete);   

module.exports = routes;