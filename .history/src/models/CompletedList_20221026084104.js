export class CompletedList {
  arrCompleted = [];

  addTodo(newCompleted) {
    this.arrCompleted.push(newCompleted);
  }
  deleteTodo(index) {
    if (index !== -1) {
      this.addTodo.splice(index, 1);
    }
  }
  saveLocalStorage() {
    let stringArrCompleted = JSON.stringify(this.arrCompleted);
    localStorage.setItem("arrCompleted", stringArrCompleted);
  }
  getLocalStorage() {
    if (localStorage.getItem("arrCompleted")) {
      this.arrCompleted = JSON.parse(localStorage.getItem("arrCompleted"));
    }
  }
  renderUI(selector) {
    let html = this.arrCompleted.reduce((content, todo, index) => {
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
