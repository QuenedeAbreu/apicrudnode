const express = require('express');
const app = express();
const routes = require('./router/router');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


//Setando as rotas
app.use('/',routes);

module.exports  = app;