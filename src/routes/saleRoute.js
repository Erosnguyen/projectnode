const express = require('express');
const dropdownController = require('../Controller/dropdownController');

const router = express.Router();

router.get('/', dropdownController.sale);
module.exports = router;
