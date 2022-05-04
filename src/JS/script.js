import { getMonth } from "./getMonth.js";
import { saveData, clearData, getEventData, addEventDay } from "./saveData.js";
let counter = 1;

getMonth(counter);
getEventData();
// addEventDay();

const overlay = document.getElementById("blurModal");
const buttonNextMonth = document.getElementById("button-next--month");
const buttonBackMonth = document.getElementById("button-back--month");
const divMonth = document.getElementById("section__div--gridMonth");
const form = document.getElementById("mainSectionModal");
const saveDataButton = document.getElementById("button-create--event");
const cancelDataButton = document.getElementById("button-cancel--event");

overlay.addEventListener("click", closeModal);
buttonNextMonth.addEventListener("click", switchMonth);
buttonBackMonth.addEventListener("click", switchMonthBack);

//Listener to Open The model Form
const buttonHeaderEvent = document
  .getElementById("headerCreateEvent")
  .addEventListener("click", createEvent);

//Listener to close the modal Form
const buttonCloseEvent = document
  .getElementById("button-close--form")
  .addEventListener("click", closeForm);

//CLOSE MODAL WITH ESCAPE KEYBOARD
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !overlay.classList.contains("hide")) {
    form.classList.add("hide");
    overlay.classList.add("hide");
  }

  if (e.key === "Enter" && !overlay.classList.contains("hide")) {
    form.classList.remove("hide");
    overlay.classList.remove("hide");
  }
});

//Listener to save the form DATA
document
  .getElementById("button-create--event")
  .addEventListener("click", saveData);

//Clear form
document.getElementById("button-cancel--event").addEventListener("click", clearData);

//FUNCTIONS
function createEvent() {
  form.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

function closeForm() {
  form.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

function closeModal() {
  form.classList.toggle("hide");
  overlay.classList.toggle("hide");
}

function switchMonth() {
  counter++;

  if (divMonth.hasChildNodes) {
    const childrens = document.querySelectorAll(".div__section--days");
    Array.from(childrens).forEach((children) => {
      divMonth.removeChild(children);
    });

    getMonth(counter);
  } else {
    getMonth(counter);
  }
}

function switchMonthBack() {
  counter--;

  if (divMonth.hasChildNodes) {
    const childrens = document.querySelectorAll(".div__section--days");
    Array.from(childrens).forEach((children) => {
      divMonth.removeChild(children);
    });

    getMonth(counter);
  } else {
    getMonth(counter);
  }
}
