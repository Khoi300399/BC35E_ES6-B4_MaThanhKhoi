import { CompletedList } from "../models/CompletedList.js";
import { TodoList } from "../models/TodoList.js";

let todo = new TodoList();

let comp = new CompletedList();

document.querySelector("#addItem").onclick = function () {
  var newTodo = document.querySelector("#newTask").value;
  todo.addTodo(newTodo);
  todo.saveLocalStorage();
  todo.renderUI("#todo");
};

window.remove = (index) => {
  todo.deleteTodo(index);
  todo.saveLocalStorage();
  todo.renderUI("#todo");

  comp.deleteCompleted(index);
  comp.saveLocalStorage();
  comp.renderUI("#completed");
};

window.complete = (index) => {
  comp.addCompleted(todo.arrTodo[index]);
  console.log(comp);
  comp.saveLocalStorage();
  comp.renderUI("#completed");
  //and
  todo.deleteTodo(index);
  todo.saveLocalStorage();
  todo.renderUI("#todo");
};

window.onload = () => {
  //Todo list
  arrTodo.getLocalStorage();
  arrTodo.renderUI("#todo");
  //Complete List
  arrCompleted.getLocalStorage();
  arrCompleted.renderUI;
};
