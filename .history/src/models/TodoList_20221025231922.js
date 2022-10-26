export class TodoList {
  arrTodo = [];

  saveLocalStorage() {
    let stringArrTodo = JSON.stringify(this.arrTodo);
  }
  getLocalStorage() {}
  renderUI() {}
}
