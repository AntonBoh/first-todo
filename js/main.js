const submitBtn = document.querySelector(".todo__submit");
const todoInput = document.querySelector(".input");
const todoList = document.querySelector(".todo__list");
const todoText = document.querySelector(".todo__text");

document.addEventListener("submit", addTodo);
document.addEventListener("click", todoComleted);

function addTodo(e) {
  e.preventDefault();
  if (todoInput.value) {
    //create todo__list-item
    let todoListItem = document.createElement("div");
    todoListItem.classList.add("todo__list-item");
    todoList.prepend(todoListItem);

    //create complite-btn
    let comleteBtn = document.createElement("button");
    comleteBtn.classList.add("complete-btn--on");
    todoListItem.append(comleteBtn);

    //create + add todo text
    let todoText = document.createElement("div");
    todoText.classList.add("todo__text");
    todoText.innerHTML = todoInput.value;
    todoListItem.append(todoText);

    //clear input + focus
    todoInput.value = "";
    todoInput.focus();
  } else {
    undefined;
  }
}
