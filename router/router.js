const express = require('express');
const router = express.Router();
const registerController = require('../controller/register');
const showdataController = require('../controller/showdata');
const insertController = require('../controller/insert');
const deleteController = require('../controller/delete');
const editController = require('../controller/edit');

router.get('/register',registerController.register);
router.get('/showdata',showdataController.showdata);
router.post('/insert',insertController.insert);
router.get('/delete/:id',deleteController.delete,showdataController.showdata);
router.post('/edit',editController.edit,showdataController.showdata);
module.exports = router;