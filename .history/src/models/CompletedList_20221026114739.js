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
  sortA_Z() {
    this.arrCompleted.sort();
  }
  sortZ_A() {
    this.arrCompleted.sort();
    this.arrCompleted.reverse();
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
    let html = this.arrCompleted.reduce((content, completed, index) => {
      return (content += `
      <li>
      ${completed}
      <div class="buttons">
        <button>
          <a class="remove"onclick="remove(${index})"><i class="far fa-trash-alt"></i></a>
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
    document.querySelector(selector).innerHTML = html;
  }
}
