const express = require('express');
require('dotenv/config');
const app = express();
const routes = require('./router/router');
// const table = require('./models/igreja')

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//Setando as rotas
app.use('/',routes);

module.exports  = app;