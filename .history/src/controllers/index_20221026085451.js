import { CompletedList } from "../models/CompletedList.js";
import { TodoList } from "../models/TodoList.js";

let arrTodo = new TodoList();
let arrCompleted = new CompletedList();

document.querySelector("#addItem").onclick = function () {
  var inputTodo = document.querySelector("#newTask").value;
};
