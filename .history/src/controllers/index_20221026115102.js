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
  //   console.log(comp);
  comp.saveLocalStorage();
  comp.renderUI("#completed");
  //and
  todo.deleteTodo(index);
  todo.saveLocalStorage();
  todo.renderUI("#todo");
};

document.querySelector("#two").onclick = () => {
  todo.sortA_Z();
  todo.renderUI("#todo");
};

document.querySelector("#three").onclick = () => {};

window.onload = () => {
  //Todo list
  todo.getLocalStorage();
  todo.renderUI("#todo");

  //Complete List
  comp.getLocalStorage();
  comp.renderUI;
};
