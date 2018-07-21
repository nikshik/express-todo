const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');
const apiController = require('./controllers/apiController');

const app = express();
const port = process.env.SERVER_PORT || 3000;

const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500);
    res.render('error', { error: err });
  } else {
    next(err);
  }
};

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'mustache');

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log('connected to database');
});
apiController(app);

app.listen(port);
