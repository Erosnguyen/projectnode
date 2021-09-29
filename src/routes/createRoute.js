const express = require('express');
const { postFile } = require('../Controller/aboutController');
const aboutController = require('../Controller/aboutController');
const router = express.Router();

router.get('/', postFile);
module.exports = router;
