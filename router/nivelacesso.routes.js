const express = require('express');
const router = express.Router();
const controllerNivelDeAcesso = require('../controller/controllerNivelAcesso');

// ----------------- Rotas Nivel de Acesso --------------------
router.get('/',controllerNivelDeAcesso.listNivelAcesso);

router.get('/:id',controllerNivelDeAcesso.listNivelAcessoOne);
router.get('/list/:titleacesso',controllerNivelDeAcesso.listNivelAcessOneName);

router.post('/create',controllerNivelDeAcesso.createNivelAcesso);
router.put('/update/:id',controllerNivelDeAcesso.updateNivelAcesso);
router.delete('/delete/:id',controllerNivelDeAcesso.deleteNivelacesso);



module.exports = router;