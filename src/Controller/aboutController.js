const product = require('../model/productModule');
const { mongooseToObject } = require('../ulti/mongoose');
class aboutController {
  postFile(req, res, next) {
    res.render('product/postProduct');
  }

  storage(req, res, next) {
    res.json(req.body);
  }

  show(req, res, next) {
    product
      .findOne({ slug: req.params.slug })
      .then((products) => {
        res.render('product/show', { products: mongooseToObject(products) });
      })
      .catch(next);
  }
  introduction(req, res, next) {
    res.render('About');
  }
}
module.exports = new aboutController();
