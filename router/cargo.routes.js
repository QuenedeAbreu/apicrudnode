const express = require('express');
const router = express.Router();
const controllerCargo = require('../controller/controllerCargo');

// ----------------- Rotas Cargo --------------------

router.get('/',controllerCargo.listCargo);

router.get('/:id',controllerCargo.listCargoOne);

router.post('/create',controllerCargo.createCargo);
router.put('/update/:id',controllerCargo.updadeCargo);
router.delete('/delete/:id',controllerCargo.deleteCargo)



module.exports = router;