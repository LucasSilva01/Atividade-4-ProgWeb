const express = require('express');
const routes = express.Router();

const carroController = require('../controllers/carroController')


routes.post('/carroInsert', carroController.insert)

routes.get('/carro', carroController.index)

routes.get('/carro/:id', carroController.details)

routes.put('/carro/:id', carroController.update)

routes.delete('/carro/:id', carroController.delete)

module.exports = routes;