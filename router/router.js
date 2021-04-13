const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerNivelAcesso');

router.get('/nivelacesso',controller.listNivelAcesso);
router.post('/createNivelAcesso',controller.createNivelAcesso);


router.get('/listidnivelacesso/:id',controller.listNivelAcessoOne);
router.get('/listnamenivelacesso/:titleacesso',controller.listNivelAcessOneName);

router.put('/updatenivelacesso',controller.updateNivelAcesso);
router.delete('/deletenivelacesso/:id',controller.deleteNivelacesso);



module.exports = router;