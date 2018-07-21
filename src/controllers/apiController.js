const bodyParser = require('body-parser');
const Todos = require('../models/todoModel');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/byuser/:uname', (req, res, next) => {
    Todos.find({ username: req.params.uname }, (err, todos) => {
      if (err) {
        next(err);
      } else {
        res.send(todos);
      }
    });
  });
  app.get('/api/todos/:id', (req, res, next) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) {
        next(err);
      } else {
        res.send(todo);
      }
    });
  });
  app.post('/api/todos', (req, res, next) => {
    const { todo, isDone, hasAttachment } = req.body;
    const newTodo = new Todos({
      username: 'test', todo, isDone, hasAttachment,
    });
    newTodo.save((err) => {
      if (err) {
        next(err);
      } else {
        res.send(newTodo);
      }
    });
  });
  app.put('/api/todos/:id', (req, res, next) => {
    const { todo, isDone, hasAttachment } = req.body;
    Todos.findByIdAndUpdate(req.params.id, { todo, isDone, hasAttachment }, { new: true },
      (err, updatedTodo) => {
        if (err) {
          next(err);
        } else {
          res.send(updatedTodo);
        }
      });
  });
  app.delete('/api/todos/:id', (req, res, next) => {
    const { todo, isDone, hasAttachment } = req.body;
    Todos.findByIdAndRemove(req.params.id, { todo, isDone, hasAttachment }, (err) => {
      if (err) {
        next(err);
      } else {
        res.send('Success');
      }
    });
  });
};
