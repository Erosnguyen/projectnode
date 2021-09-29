const express = require('express');
const aboutController = require('../Controller/aboutController');
const router = express.Router();

router.get('/:slug', aboutController.show);
module.exports = router;
