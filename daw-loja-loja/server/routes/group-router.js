const express = require('express');
const routes = express.Router()

const groupController = require('../controllers/group-controller');



routes.get('/groups', groupController.index)
routes.post('/groups', groupController.create)

routes.get('/groups/:id', groupController.show)
routes.put('/groups/:id', groupController.update)
routes.delete('/groups/:id', groupController.delete)

module.exports = routes;