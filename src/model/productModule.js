const mongoose = require('mongoose');
const schema = mongoose.Schema;

const course = new schema(
  {
    img: String,
    name: String,
    description: String,
    slug: String,
    videoID: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('course', course);
