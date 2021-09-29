const express = require('express');
const dropdownController = require('../Controller/dropdownController');
const route = express.Router();

route.get('/', dropdownController.index);

module.exports = route;
