const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/erosnguyen_shop', {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });
    console.log('Connected!!!');
  } catch (error) {
    console.log('Unconnected!!!');
  }
}
module.exports = { connect };
