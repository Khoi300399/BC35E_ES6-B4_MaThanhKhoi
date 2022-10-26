export class TodoList {
  arrTodo = [];

  saveLocalStorage() {
    let stringArrTodo = JSON.stringify(this.arrTodo);
    localStorage.setItem("arrTodo", stringArrTodo);
  }
  getLocalStorage() {}
  renderUI() {}
}
