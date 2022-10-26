export class TodoList {
  arrTodo = [];

  saveLocalStorage() {
    let stringArrTodo = JSON.stringify(this.arrTodo);
    localStorage.setItem("arrTodo", stringArrTodo);
  }
  getLocalStorage() {
    if (localStorage.getItem("arrTodo")) {
      this.arrTodo = JSON.parse(localStorage.getItem("arrTodo"));
    }
  }
  renderUI(selector) {
    let html = this.arrTodo.reduce((content, todo, index) => {
      return (content += `
        <li>
        ${todo}
        <div class="buttons">
          <button>
            <span class="remove" onclick="remove(${index})"><i class="far fa-trash-alt" ></i></span>
          </button>
          <button >
            <span class="complete" onclick="complete(${index})"><i class="far fa-check-circle"></i></span>
          </button>
        </div>
      </li>
        `);
    }, "");
  }
}
