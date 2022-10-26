import { CompletedList } from "../models/CompletedList.js";
import { TodoList } from "../models/TodoList.js";

let arrTodo = new TodoList();
arrTodo.getLocalStorage();
arrTodo.renderUI("#todo");
let arrCompleted = new CompletedList();
arrCompleted.getLocalStorage();
arrCompleted.renderUI;

document.querySelector("#addItem").onclick = function () {
  var newTodo = document.querySelector("#newTask").value;
  arrTodo.addTodo(newTodo);
  console.log(arrTodo);
  arrTodo.saveLocalStorage();
  arrTodo.renderUI("#todo");
};

window.remove = (index) => {
  arrTodo.deleteTodo(index);
  arrTodo.saveLocalStorage();
  arrTodo.renderUI("#todo");
};

window.complete = (index) => {

};

window.onload= ()={
    
}
