module.exports = function (app) {
  var todoController = require("../controllers/todoController");

  app
    .route(`/todos`)
    .get(todoController.list_todos)
    .post(todoController.add_todo);

  app
    .route(`/todos/:_id`)
    .delete(todoController.delete_todo)
    .put(todoController.edit_todo);

  app.route(`/todos/:_id/done`).put(todoController.toggle_done);
};
