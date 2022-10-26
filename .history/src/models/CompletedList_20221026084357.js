export class CompletedList {
  arrCompleted = [];

  addCompleted(newCompleted) {
    this.arrCompleted.push(newCompleted);
  }
  deleteCompleted(index) {
    if (index !== -1) {
      this.arrCompleted.splice(index, 1);
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
      sdasdasdasd
      <div class="buttons">
        <button>
          <a class="remove"><i class="far fa-trash-alt"></i></a>
        </button>
        <button>
          <span class="complete"
            ><i class="fas fa-check-circle"></i
          ></span>
        </button>
      </div>
    </li>
          `);
    }, "");
  }
}
