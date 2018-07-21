const express = require('express');
const mongoose = require('mongoose');
const config = require('../config');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'mustache');

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log('connected to database');
  db.close();
});

app.listen(port);
