import { getMonth } from "./getMonth.js";

getMonth();

const buttonHeaderEvent = document.getElementById("headerCreateEvent").addEventListener("click", createEvent);
const buttonCloseEvent = document.getElementById("button-close--form").addEventListener("click", closeForm);
const overlay = document.getElementById("blurModal");


overlay.addEventListener("click", closeModal);

const form = document.getElementById("mainSectionModal");

function createEvent(){
    form.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

function closeForm(){
    form.classList.toggle("hide");
}

function closeModal(){
    form.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

//CLOSE MODAL WITH ESCAPE KEYBOARD
document.addEventListener('keydown', function (e){
  if (e.key === 'Escape' && overlay.classList.contains('hide'));{
    form.classList.add("hide");
    overlay.classList.add("hide");
  }

  if (e.key === 'Enter'&& overlay.classList.contains('hide')){
    form.classList.remove("hide");
    overlay.classList.remove("hide");
  }
  
});
