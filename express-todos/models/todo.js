const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
  update,
};

function getAll() {
  return todos;
}
function getOne(id) {
  return todos.find((todo) => todo.id === parseInt(id));
}
function create(todo) {
  todo.done = false;
  todo.id = Date.now() % 1000000;
  todos.push(todo);
}

function deleteOne(idO) {
  let idToDelete = getAll().findIndex((e) => e.id === idO);
  getAll().splice(idToDelete, 1);
}

function update(idO, newVals) {
  let todo = todos.find((e) => e.id === idO);
  let todoId = getAll().findIndex((e) => e.id === idO);
  getAll().splice(todoId, 1);
  console.log(todo);
  if (Boolean(newVals.todo)) todo.todo = newVals.todo;
  todo.done = newVals.done? true :false

  getAll().push(todo);
}
console.log(todos);
