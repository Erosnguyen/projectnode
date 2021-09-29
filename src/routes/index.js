const homeRoute = require('./homeRoute');
const productRoute = require('./productRoute');
const createRoute = require('./createRoute');
const dropdownRoute = require('./dropdownRoute');
const saleRoute = require('./saleRoute');
function Route(app) {
  app.use('/product', productRoute);
  app.use('/about', productRoute);
  app.use('/create', createRoute);
  app.use('/allstyle', dropdownRoute);
  app.use('/saleproduct', saleRoute);
  app.use('/', homeRoute);
}

module.exports = Route;
