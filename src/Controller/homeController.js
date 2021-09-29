const db = require('../model/productModule');
class homeController {
  index(req, res) {
    db.find({})
      .then((db) => {
        db = db.map((db) => db.toObject());
        res.render('Home', { db });
      })
      .catch((err) => next(err));
  }
  about(req, res) {
    res.render('About');
  }
}
module.exports = new homeController();
