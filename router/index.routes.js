const express = require('express');
const router = express.Router();


const controllerNivelDeAcesso = require('../controller/controllerIndex');

router.get('/',controllerNivelDeAcesso.index);

module.exports = router;