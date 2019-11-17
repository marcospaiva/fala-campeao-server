const express = require('express');
const routes = express.Router();

const PhrasesController = require('./controller/PhrasesController')

routes.get('/phrases', PhrasesController.show);

module.exports = routes;