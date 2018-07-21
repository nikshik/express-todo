const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean,
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
