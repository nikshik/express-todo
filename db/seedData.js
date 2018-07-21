const mongoose = require('mongoose');
const Todos = require('../src/models/todoModel');
const seedTodos = require('./seed.json');
const config = require('../config');

mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true }, (err, db) => {
  if (err) {
    throw err;
  } else {
    Todos.create(seedTodos, (createErr) => {
      if (createErr) {
        throw createErr;
      }
      console.log('seed data imported');
      db.close();
    });
  }
});
