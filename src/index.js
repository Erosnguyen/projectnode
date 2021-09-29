const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const router = require('./routes');
const morgan = require('morgan');
const mongoose = require('./config/db');
const port = process.env.PORT || 3000;

// HTTP log
app.use(morgan('combined'));

// static file
app.use(express.static(path.join(__dirname, 'public')));
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
// set engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

// connect to mongoose
mongoose.connect();

app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

// router
router(app);

app.listen(port, () => console.log('Access to localhost successfully!!!'));
