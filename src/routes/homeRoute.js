const express = require('express');
const homeController = require('../Controller/homeController');
const router = express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about);
module.exports = router;
