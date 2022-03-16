const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.get('/addTemplate', userController.getAddTemplate);

router.post('/addTemplate', userController.postAddTemplate);

router.get('/editTempalte', userController.getEditTemplate);

router.post('/editTempalte', userController.postEditTemplate);

router.get('/deleteTemplate', userController.getDeleteTemplate);

router.post('/deleteTemplate', userController.postDeleteTemplate);

router.get('/getTemplates', userController.getGetTemplates);

router.post('/getTemplates', userController.postGetTemplates);

module.exports = router;