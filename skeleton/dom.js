// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  const container = document.getElementById("todo-container");
  const addTodoForm = document.getElementById("add-todo");

  let state = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: false },
    { id: -1, description: "third todo", done: true },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  const createTodoNode = function (todo) {
    const todoNode = document.createElement("li");

    // this add todo description node
    const todoTitle = document.createElement("span");
    todoTitle.classList.add("desc__span");
    todoNode.appendChild(todoTitle);
    todoTitle.setAttribute("id", todo.id);
    todoTitle.textContent = todo.description;
    if (todo.done) {
      todoTitle.classList.toggle("done");
    }

    // this adds the delete button
    const deleteButtonNode = document.createElement("button");
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.classList.add("button_delete");
    deleteButtonNode.textContent = "delete";

    deleteButtonNode.addEventListener("click", function (event) {
      // make sure to make delete button full functional
      // hint: todoFunctions.deleteTodo
    });

    // add markTodo button
    const toggleDoneBtn = document.createElement("button");
    todoNode.appendChild(toggleDoneBtn);
    toggleDoneBtn.textContent = todo.done ? "undone" : "done";
    toggleDoneBtn.classList.add("button_done");

    // mark todo ad done or not done
    toggleDoneBtn.addEventListener("click", (event) => {
      // hint: todoFunctions.markTodo and maybe you need to update dom!
    });

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function (event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?

      // what is inside event.target?
      const description = "some desc"; // event.target ....

      // hint: todoFunctions.addTodo

      // It's a good to clear input if everything is done
    });
  }

  // you should not need to change this function, BUT you do need to call it whenever the state change!
  const update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  const renderState = function (state) {
    const todoListNode = document.createElement("ul");
    todoListNode.classList.add("ul__todo");

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
