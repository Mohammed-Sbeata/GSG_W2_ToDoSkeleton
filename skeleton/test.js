const logic = require("./logic");

test("Testing Jest is working", function () {
  expect(2 + 2).toBe(4);
});

describe('addTodo', () => {
  const todo1 = {id: 1, text: 'Todo 1', done: false};
  const todo2 = {id: 2, text: 'Todo 2', done: true};
  const newTodo = {text: 'New Todo', done: false};

  test('Testing the adding', () => {
    const originalTodos = [todo1, todo2];
    const newTodos = logic.addTodo(originalTodos, newTodo);
    expect(newTodos).not.toBe(originalTodos);
  });

});

describe('Delete Todo ', () => {
  test(" deleteTodo Function Now ", () => {
    const deltodo = { id: 1, text: 'deltodo ', done: false };
    const deltodo2 = { id: 2, text: 'deltodo2', done: true };

    const originalTodos = [deltodo, deltodo2];
    const delTodos = logic.deleteTodo(originalTodos, deltodo.id);
    expect(delTodos).toEqual([deltodo2]);
  })
});

describe('Marke Todo ', () => {
  test(" Mark Todo Function Now ", () => {
    const martodo = { id: 1, text: 'martodo ', done: false };
    const martodo2 = { id: 2, text: 'martodo2', done: true };

    const originalTodos = [martodo, martodo2];
    const marTodos = logic.markTodo(originalTodos, martodo.id);
    expect(marTodos).toEqual([martodo2]);
  })
});



