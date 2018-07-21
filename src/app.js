const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'mustache');

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true }, (err) => {
  if (err) {
    throw err;
  }
  console.log('connected to database');
});

app.listen(port);
