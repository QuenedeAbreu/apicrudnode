const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/user',controller.listUser);
router.get('/userlistid',controller.listUserOne);
router.get('/userlistname',controller.listUserOneName);
router.post('/createusuario',controller.creatUser);
router.put('/userupdate',controller.updateUser);
router.delete('/delete',controller.deleteUser);



module.exports = router;