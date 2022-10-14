//VARIABLES

let startVal = 0;
let incrementor = 1;

// CACHED ELEMENTS
const incrementButtonEl = document.querySelector(".plus");
const decrementButtonEl = document.querySelector(".minus");
const inputEl = document.getElementById("num");
const displayOutputEl = document.querySelector(".disp-number");
// Initial Values
displayOutputEl.innerText = startVal;
inputEl.value = incrementor;

// Entrypoint
init();

// Functions
function init() {
  incrementButtonEl.addEventListener("click", increment);
  decrementButtonEl.addEventListener("click", decrement);
  inputEl.addEventListener("keyup", changeIncrementor);
}
function increment() {
  if (incrementor === 0) return;
  startVal += incrementor;
  render();
}

function decrement() {
  if (incrementor === 0) return;

  render();
  startVal -= incrementor;
}
function changeIncrementor() {
  incrementor = parseInt(this.value);
}
function render() {
  displayOutputEl.style.color = startVal < 0 ? "red" : "black";
  displayOutputEl.innerText = startVal;
}
