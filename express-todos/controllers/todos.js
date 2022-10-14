const Todo = require("../models/todo");

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
  edit,
  update,
};

function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
    title: "Express Todo",
  });
}

function newTodo(req, res) {
  res.render("todos/new", {
    title: "New",
  });
}
function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    title: "Show",
  });
}

function create(req, res) {
  Todo.create(req.body);
  res.redirect("/todos");
}

function deleteTodo(req, res) {
  Todo.delete(parseInt(req.params.id));
  res.redirect("/todos");
}

function edit(req, res) {
  res.render("todos/edit", {
    todo: Todo.getOne(req.params.id),
    title: "Edit",
  });
}
function update(req, res) {

  Todo.update(parseInt(req.params.id),req.body)
  res.redirect('/todos')

}
