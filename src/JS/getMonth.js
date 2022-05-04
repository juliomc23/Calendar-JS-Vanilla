import {addEventDay} from './saveData.js';
let flag = 0;
let door = 0;
let monthEvents = 0;
const getMonth = (counter) => {
  const gridMonth = document.getElementById("section__div--gridMonth");
  const currentMonth = document.getElementById("currentMonth");
  let anexMonth = counter -1;
  let day = 1;
  let arrayHours = [];
  // let monthEvents;
  door = 0;
  let idButtonDay = "addDay";
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  let currentYear = date.getFullYear();
  let initialDay = new Date(
    date.getFullYear(),
    date.getMonth() + counter - 1
  ).getDay();
  const diasMeses = new Date(
    date.getFullYear(),
    date.getMonth() + counter,
    0
  ).getDate();

  let lastMonth;
  if(counter == 1){
    lastMonth = `${month[(date.getMonth()+anexMonth)%12]}`
  }else{
    lastMonth = currentMonth.textContent;
  }
  
  if((date.getMonth()+anexMonth) < 0 && ((date.getMonth()+anexMonth)%12) != 0){
    currentMonth.textContent = `${month[(((date.getMonth()+anexMonth)%12)+12)]}`;
    monthEvents = (((date.getMonth()+anexMonth)%12)+12);
    arrayHours = [];
  }else{
    currentMonth.textContent = `${month[(date.getMonth()+anexMonth)%12]}`;
    monthEvents = (date.getMonth()+anexMonth)%12;
    arrayHours = [];
  }
  
  //Function to change the year
  getYear(currentMonth.textContent, lastMonth, date);

  for (let i = 1; i <= 42; i++) {//diasMeses + initialDay
      
    //Creamos elemento section para el dia
    const sectionDay = document.createElement("section");
    //Creamos div para meter el dia
    const divDay = document.createElement("div");
    //Crear button para crear eventos
    const buttonEvent = document.createElement("button");
    buttonEvent.textContent = "+";

    sectionDay.classList.add("div__section--days");
    divDay.classList.add("section__div--singleDay");

    if(initialDay == 0){
        initialDay = 7
    }
    if (i >= initialDay && (door == 0)) {
        
      sectionDay.setAttribute("id", `${day}`);
      divDay.textContent = day;
      idButtonDay += day;
      //Add the class, id and tabindex to each button plus day event
      buttonEvent.setAttribute("class","buttonDay");
      buttonEvent.setAttribute("tabindex", `${day}`);
      buttonEvent.setAttribute("id", idButtonDay);

      sectionDay.appendChild(divDay);
      sectionDay.appendChild(buttonEvent);

      if (divDay.textContent == date.getDate() && currentMonth.textContent == month[date.getMonth()]) {
        divDay.classList.add("section__div--currentDay");
      }

      if (sectionDay.getAttribute("id") === diasMeses.toString()) {
        door = 1;
      }

      day++;
    
    }
    
    gridMonth.appendChild(sectionDay);
    if(i >= diasMeses+initialDay-1 && i%7==0){
      i = 43;
    }
  }
  addEventDay(monthEvents, arrayHours);
};

function getYear(current, last, date){
  const year = document.getElementById("currentYear");
  
  if(flag == 0){
    year.textContent = date.getFullYear();
    flag = 1;
  }

  if(current === "December" && last === "January"){
    year.textContent = `${parseInt(year.textContent) - 1}`;
  }else if(current === "January" && last === "December"){
    year.textContent = `${parseInt(year.textContent) + 1}`;
  }
}
console.log(monthEvents);
export { getMonth , monthEvents };
