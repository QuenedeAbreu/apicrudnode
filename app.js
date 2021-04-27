const express = require('express');
require('dotenv/config');
const app = express();

// --------- Rotas do app -------------
const routes = require('./router/index');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
// const table = require('./models/igreja')
// --------- end Rotas do app -------------

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/documentations', swaggerUi.serve, swaggerUi.setup(swaggerFile))
//Setando as rotas
app.use(routes);


module.exports  = app;