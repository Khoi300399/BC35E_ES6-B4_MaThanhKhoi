import { CompletedList } from "../models/CompletedList.js";
import { TodoList } from "../models/TodoList.js";

let arrTodo = new TodoList();

let arrCompleted = new CompletedList();

document.querySelector("#addItem").onclick = function () {
  var newTodo = document.querySelector("#newTask").value;
  arrTodo.addTodo(newTodo);
  arrTodo.saveLocalStorage();
  arrTodo.renderUI("#todo");
};

window.remove = (index) => {
  arrTodo.deleteTodo(index);
  arrTodo.saveLocalStorage();
  arrTodo.renderUI("#todo");

  arrCompleted.deleteCompleted(index);
  arrCompleted.saveLocalStorage();
  arrCompleted.renderUI("#completed");
};

window.complete = (index) => {
  arrCompleted.addCompleted(arrTodo[index]);
  console.log(arrCompleted);
  arrCompleted.saveLocalStorage();
  arrCompleted.renderUI("#completed");
  //and
  arrTodo.deleteTodo(index);
  arrTodo.saveLocalStorage();
  arrTodo.renderUI("#todo");
};

window.onload = () => {
  //Todo list
  arrTodo.getLocalStorage();
  arrTodo.renderUI("#todo");
  //Complete List
  arrCompleted.getLocalStorage();
  arrCompleted.renderUI;
};
