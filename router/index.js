const express = require('express');
const router = express.Router();

const indexroutes = require('./index.routes');
const nivelacessoroutes = require('./nivelacesso.routes');
const cargoroutes = require('./cargo.routes');

router.use('/',indexroutes);
router.use('/nivelacesso',nivelacessoroutes);
router.use('/cargo',cargoroutes);

module.exports = router;