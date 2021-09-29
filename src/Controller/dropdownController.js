const db = require('../model/productModule');
const { mongooseToObject } = require('../ulti/mongoose');
class dropdownController {
  index(req, res, next) {
    db.findOne({ name: 'Blumaan' })
      .then((db) => {
        res.render('product/productDropdown', { db: mongooseToObject(db) });
      })
      .catch(next);
  }
  sale(req, res, next) {
    db.findOne({ name: 'Hybrid cream clay' })
      .then((db) => {
        res.render('product/saleProduct', { db: mongooseToObject(db) });
      })
      .catch(next);
  }
}
module.exports = new dropdownController();
