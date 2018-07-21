const bodyParser = require('body-parser');
const Todos = require('../models/todoModel');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/byuser/:uname', (req, res) => {
    Todos.find({ username: req.params.uname }, (err, todos) => {
      if (err) {
        throw err;
      }
      res.send(todos);
    });
  });
  app.get('/api/todos/:id', (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todo) => {
      if (err) {
        throw err;
      }
      res.send(todo);
    });
  });
  app.post('/api/todo', (req, res) => {
    const { todo, isDone, hasAttachment } = req.body;
    if (req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, { todo, isDone, hasAttachment }, (err, updatedTodo) => {
        if (err) {
          throw err;
        }
        res.send(updatedTodo);
      });
    } else {
      const newTodo = new Todos({
        username: 'test', todo, isDone, hasAttachment,
      });
      newTodo.save((err) => {
        if (err) {
          throw err;
        }
        res.send(newTodo);
      });
    }
  });
  app.delete('/api/todo/:id', (req, res) => {
    const { todo, isDone, hasAttachment } = req.body;
    Todos.findByIdAndRemove(req.params.id, { todo, isDone, hasAttachment }, (err) => {
      if (err) {
        throw err;
      }
      res.send('Success');
    });
  });
};
